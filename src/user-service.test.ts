import UserService from "./user-service";
import {getUser} from "./get-user";
import {UserDto} from "./UserDto";

jest.mock('./get-user');

describe('The Test service', () => {
    // xit('should get data from repo', async () => {
    //
    //     UserRepository.prototype.getUser = jest.fn(() => Promise.resolve({
    //             fullName: 'Terefere',
    //             email: 'Terefere',
    //             password: 'Terefere',
    //         }
    //     ));
    //
    // });

    it('should get data from repo', async () => {
        const mockedGetUser = getUser as unknown as jest.MockedFunction<typeof getUser>

        mockedGetUser.mockResolvedValue({
            fullName: "Terefere",
            email: 'Terefere',
            password: 'Terefere',
        })
        const userService = new UserService();
        // await userService.getUser();

        expect((await userService.getUser()).fullName).toBe("Terefere")
        expect(getUser).toHaveBeenCalledTimes(1)
    });
});
