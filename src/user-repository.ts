import {UserDto} from "./UserDto";

export class UserRepository {
    public getUser(): Promise<UserDto> {
        return Promise.resolve({
                fullName: 'John Smith',
                email: 'john@smith.com',
                password: 'strongPassword123',
            }
        )
    }
}