
import express from 'express';
import * as CryptoJS from 'crypto-js';

import * as UTILS from '../utils';

/**
 * @function Cryption
 * @returns check data and decrypt it.
 */
const Cryption = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { Response } = UTILS.HELPERS;

    try {
        let { data } = req.body;
        data = CryptoJS.AES.decrypt(data, process.env.ENCDECRYPTKEY!); 
        data = data.toString(CryptoJS.enc.Utf8)
        req.body = JSON.parse(data);
        
        /** moved to api process after decrpyted data */
        next();
    } catch (error: any) {
        return Response.error(res, { status: 500, message: "Failed to encrypt.", error });
    }
}

export default Cryption;
