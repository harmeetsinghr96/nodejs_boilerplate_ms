import { config } from "dotenv";
import { resolve as Resolve } from "path";

const Config = async () => {
    if (process.env.NODE_ENV === "dev") {
        console.log(":: YOU ARE ON DEV MODE ::");
        config({ path: Resolve(__dirname, './.env/dev.env') });
    } 

    return true;
}

export default Config;
