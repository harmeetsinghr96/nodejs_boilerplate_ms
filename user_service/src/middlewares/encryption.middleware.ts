
// import * as CryptoJS from 'crypto-js';
// import { NextFunction, Request, Response } from 'express';
// import { Helper } from '../helpers';

// /**
//  * @function RequestDecrypt
//  * @param req 
//  * @param res 
//  * @param next 
//  * @returns 
//  */
// const RequestDecrypt = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { data } = req.body; 
//         const dataFields = await reqDeEncrypt(data); 
//         req.body = JSON.parse(dataFields);
//         next();
//     } catch (error: any) {
//         return Helper.Response.sendError(res, { status: 500, message: String(error), error });
//     }

// }

// /**
//  * @function reqDeEncrypt
//  * @param text 
//  * @returns 
//  */
// const reqDeEncrypt = (text: any) => {
//     const reqEncKey: string = process.env.ENCDECRYPTKEY!;
//     const bytes = CryptoJS.AES.decrypt(text, reqEncKey);
//     const plaintext = bytes.toString(CryptoJS.enc.Utf8);
//     return plaintext;
// }

// export default RequestDecrypt;
