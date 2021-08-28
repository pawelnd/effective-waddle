import UserService from "./user-service";
import {UserRepository} from "./user-repository";


describe('The Test service', () => {
    it('should get data ', async () => {

        const userService = new UserService();
        new UserRepository().getUser = jest.fn();

        await expect(userService.getUser()).toBeDefined();
    });
});