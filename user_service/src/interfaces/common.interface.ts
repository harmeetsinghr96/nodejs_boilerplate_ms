import { Router } from "express";

interface IController {
    path: string;
    router: Router;
};

interface IBaseModel {
    findAll(model: any, params: any): Promise<Array<any>>;   
}


export {
    IController,
    IBaseModel
};