import {UserDto} from './UserDto'
import {UserRepository} from "./user-repository";

class UserService {
    private repository = new UserRepository();

    public async getUser(): Promise<UserDto> {
        return this.repository.getUser();
    }
}

export default UserService;