// import { NextFunction, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { Helper } from '../helpers';

// /**
//  * @function ValidateJWT
//  * @param req 
//  * @param res 
//  * @param next 
//  */
// const ValidateJWT = (req: Request | any, res: Response, next: NextFunction) => {
//     const { sendError, createResponse } = Helper.Response;
//     const secret: any = process.env.JWTSECRET; 
//     const token: string = req.headers['api-access-token'];
//     jwt.verify(token, secret, (error: any, decoded: any) => { 
//         if (error) return sendError(res, createResponse("401", "Un-authenticated", error));
//         const { id } = decoded;
//         req.user = decoded;
//         req.body['_id'] = id;
//         next();
//     });
// }

// export default ValidateJWT;