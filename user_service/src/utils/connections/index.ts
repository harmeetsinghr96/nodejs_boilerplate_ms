import MongoDb from "./database/mongodb.connection";

 const CONNECTIONS = {
    MONGO_DB: new MongoDb()
 }

export default CONNECTIONS;