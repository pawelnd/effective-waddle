import express from 'express';
import UserService from "./user-service";

const app = express();

let a = 1;
app.get('/', async (req, res) => {
    let userService = new UserService();
    let user = await userService.getUser();
    res.send('Well done!'  + a++ + JSON.stringify(user));
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})