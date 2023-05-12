import App from "./app";
import Config from "./config";
import controllers from "./modules";

( async () => {
  
  /* Process Enviroment */  
  const isStarted: boolean = await Config();
  
  if (isStarted) {
    /* Initializing Application */
    const app = new App(controllers);
    /** Starting servers NODE */
    app.startServer();
  }
  
})();