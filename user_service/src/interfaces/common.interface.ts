import express from "express";

interface IController {
    path: string;
    router: express.Router;
};

interface IBaseModel {
    findAll(model: any, params: any): Promise<Array<any>>;   
}

interface IRequest extends express.Request {
    user?: { id: string, email: string }
}

export {
    IController,
    IBaseModel,
    IRequest
};