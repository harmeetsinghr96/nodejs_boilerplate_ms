import mongoose from 'mongoose';

class MongoDb {

    constructor() {
        this.connect();
    }

    /**
     * MongoDb Connection
     */
    private async connect() {
        const _host = process.env.MONGO_HOSTNAME!;
        const _port = process.env.MONGO_PORT!;
        const _db = process.env.MONGO_DATABASE!;

        const url: string = `mongodb://${_host}:${_port}/${_db}?authSource=admin`;
        const options: object = { useNewUrlParser: true, useUnifiedTopology: true };

        /**
         * Mongo Connectivity
         * @param (string) url
         * @param (object) options
         */
        this.connectivity(url, options);
    }

    private connectivity(url: string, options: object) {
        mongoose.connect(url, options).then((res: any) => {
            console.log(':: MongoDB :: Connected successfully. ::');
        }).catch((error: Error) => {
            console.log(':: MongoDb :: Failed To Connect. ::');
        });

        mongoose.set('debug', true);
    }
}

export default MongoDb;
