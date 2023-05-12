import express from "express";

class Response {

    /**
     * @funcation success
     * @param response 
     * @param data 
     * @returns Success Response
     */
    public success(res: express.Response, data: any = {}) {
        return res.status(200).json({ ...data, status: "200" });
    }

    /**
     * @fuction error
     * @param response 
     * @param errors 
     * @returns Error Response
     */
    public error(res: express.Response, errors: any) {
        let { status, message } = errors;
        status = status || 400;
        return res.status(status).json({ errors });
    }

    /**
     * @function modify
     * @param status (number | string) 
     * @param message (string)
     * @param data {object: any}
     * @returns response object
     */
    public modify(
        status: string | number,
        message: string,
        data: object = {}
    ): Object {
        return { status, message, data };
    }
}

export default Response;