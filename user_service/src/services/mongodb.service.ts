import { Model, Schema } from "mongoose";
import * as INTERFACES from '../interfaces';

class MongodbService implements INTERFACES.COMMON.IBaseModel {

    constructor() { }

    /**
     * @function findAll
     * @param model 
     * @param params 
     * @returns Array<any>
     */
    public async findAll(
        model: Model<Document>, 
        params: object
    ): Promise<Array<any>> {
        return await model.find(params);
    }

};

export default MongodbService;