import { model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
import * as INTERFACES from '../../interfaces';

class UserSchema extends
    Schema<INTERFACES.USER.IUserAttributes>
    implements INTERFACES.USER.IUserAttributes {

    public schema!: Schema;

    constructor() {
        super();
        this.createSchema();
    }

    email: string = "";
    password: string = "";
    role: string = "USER";
    isDisabled: boolean = false;

    private createSchema() {
        this.schema = new Schema<INTERFACES.USER.IUserMongoSchemaDocument>({
            email: { type: String, trim: true, index: true, required: true },
            password: { type: String, trim: true, required: true },
            role: { type: String, enum: ["ADMIN", "CREATOR"], default: "CREATOR" },
            isDisabled: { type: Boolean, default: false }
        }, { timestamps: true });

        this.schema.plugin(mongooseUniqueValidator, { type: 'mongoose-unique-validator' });
    }
}

export default model<INTERFACES.USER.IUserMongoSchemaDocument, any>('User', new UserSchema().schema);