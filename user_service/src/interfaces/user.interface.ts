import { Document, Model } from "mongoose";

interface IUserAttributes {
    email: string;
    password: string;
    role: string;
    isDisabled: boolean;
};

interface IUserMongoSchemaDocument extends IUserAttributes, Document { };

interface IUserRegisteration {
    email: string;
    password: string;
}

export {
    IUserAttributes,
    IUserMongoSchemaDocument,
    IUserRegisteration
}