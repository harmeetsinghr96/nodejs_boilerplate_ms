import express from 'express';
import jwt from 'jsonwebtoken';

import * as UTILS from '../utils';
import * as INTERFACES from '../interfaces';

/**
 * @function ValidateJWT
 * @param req 
 * @param res 
 * @param next 
 */
const ValidateJWT = (req: INTERFACES.COMMON.IRequest, res: express.Response, next: express.NextFunction) => {
    const { Response } = UTILS.HELPERS;

    try {
        let token: any = req.headers['api-access-token'];
        token = jwt.verify(token, process.env.JWTSECRET!);
        const { id } = token;
        req.user = token;

        /** move to next function after checked token in api */
        next();
    } catch (error) {
        return Response.error(res, Response.modify("401", "Un-authenticated", { error }));
    }
}

export default ValidateJWT;