import User from './user.schema';

import * as INTERFACES from '../../interfaces';
import SERVICES from '../../services';

class UserModel extends SERVICES.MongodbService {

    constructor() {
        super();
    }

    /** 
     * @function register
     * @returns Promise<void>
     */
    public async register(
        user: INTERFACES.USER.IUserRegisteration
    ): Promise<void> {
        try {
            /** registration statement */

           const res = await this.findAll(User, {});
           console.log(res);
        } catch (error) {
            throw error;
        }
    }

}

export default UserModel; 