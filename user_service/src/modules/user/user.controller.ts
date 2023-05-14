import mongoose from 'mongoose';
import express from "express";
import UserModel from './user.model';

import * as INTERFACES from '../../interfaces';
import * as UTILS from './../../utils';
import * as MIDDLEWARES from '../../middlewares';

class UserController implements INTERFACES.COMMON.IController {
    private userModel = new UserModel();
    public path = '/user';
    public router = express.Router();

    constructor() { 
        this.initializeRoutes(); 
    }

    private async initializeRoutes() {
        this.router
            .all(`${this.path}/*`)
            .post(`${this.path}/register`, MIDDLEWARES.Cryption, this.register)
    }

    /**
     * @api register
     * @dev Registeration & validating a user
     * @returns success (200, {}) | error (400)
     */
    public async register(req: express.Request | any, res: express.Response) {
        const { Response } = UTILS.HELPERS;

        try {
            const user = req.body;
            await this.userModel.register(user);
            return Response.success(res, Response.modify(200, "Success..!!"));
        } catch (error: any) {
            return Response.error(res, Response.modify(400, String(error), error));
        }
    };
}

export default UserController;