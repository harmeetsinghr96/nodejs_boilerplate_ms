import http from "http";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from 'morgan';

import * as INTERFACES from "./interfaces";
import * as UTILS from './utils';

const debug = require("debug")("node");

class App {

    private app: express.Application;
    private server: http.Server;
    private port: number | string | boolean;

    constructor(controllers: INTERFACES.COMMON.IController[]) {
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = this.normalizePort(process.env.PORT! || "30001");
        /** Init app middleware & controllers */
        this.initMiddleware();
        this.initControllers(controllers);
    };

    /**
     * @function initMiddlewares
     */
    private initMiddleware = () => {
        this.app.set("port", this.port);
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json())
        this.app.use(morgan('tiny'));
    };

    /**
     * @function initControllers
     * @param controllers 
     */
    private initControllers = (controllers: Array<INTERFACES.COMMON.IController>) => {
        controllers.forEach((controller: INTERFACES.COMMON.IController) => {
            this.app.use("/v1/users", controller.router);
        });

        /** Health check :: if server is running */
        this.app.use("/v1/users/status", (req: express.Request, res: express.Response, next: express.NextFunction) => {
            return UTILS.HELPERS.Response.success(res, {
                isSuccess: true, 
                data: {
                    message: `User service running on Port ${this.port}.`
                }
            });
        })
    };

    /**
     * @function createServer
     */
    public startServer = () => {
        this.server.on("error", this.onError);
        this.server.on("listening", this.onListening);
        this.server.listen(this.port);
    };

    /** 
     * @function onListener
     */
    private onListening = () => {
        /** UTILS::CONNECTIONS::CONNECTING */
        UTILS.CONNECTIONS.MONGO_DB;

        /** Connectiong to the server, Listening to PORT 3001 */
        const addr = this.server.address();
        const bind = typeof addr === "string" ? "pipe " + addr : "port " + this.port;
        debug("Listening on " + bind);
        console.log(`User service is listening on PORT::${this.port}`);

    };

    /**
     * @function normalizePort
     * @param value 
     * @returns 
     */
    private normalizePort = (ports: any) => {
        let port: number = parseInt(ports, 10);
        if (isNaN(port)) {
            return port;
        }
        if (port >= 0) {
            return port;
        }
        return false;
    };

    /**
     * @function onError
     * @param error 
     */
    private onError = (error: any) => {
        if (error.syscall !== "listen") {
            throw error;
        }

        const addr = this.server.address();
        const bind = typeof addr === "string" ? "pipe " + addr : "port " + this.port;
        switch (error.code) {
            case "EACCES":
                console.error(bind + " requires elevated privileges");
                process.exit(1);
                break;
            case "EADDRINUSE":
                console.error(bind + " is already in use");
                process.exit(1);
                break;
            default:
                throw error;
        }
    };

}

export default App;