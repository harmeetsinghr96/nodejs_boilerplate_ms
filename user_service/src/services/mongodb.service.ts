import { Model, Schema } from "mongoose";
import * as INTERFACES from '../interfaces';

class MongodbService implements INTERFACES.COMMON.IBaseModel {

    constructor() { }

    /**
     * @function find
     * @param model 
     * @param params 
     * @returns 
     */
    public async findAll(
        model: Model<Document>, 
        params: object
    ): Promise<Array<INTERFACES.USER.IUserAttributes>> {
        return await model.find(params);
    }

    public async findOne(): Promise<void> {}

    public async updateOne(): Promise<void> {}

    public async updateMany(): Promise<void> {}

    public async deleteOne(): Promise<void> {}

    public async deleteMany(): Promise<void> {}

};

export default MongodbService;