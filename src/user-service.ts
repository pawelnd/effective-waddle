import {UserDto} from './UserDto'
import {getUser} from "./get-user";


class UserService {

    public async getUser(): Promise<UserDto> {
        let user = await getUser();
        user.password = '';
        return user;
    }
}

export default UserService;