import express from 'express';
import session from 'express-session';
import UserService from "./user-service";

const app = express();
app.use(session({
    secret: 'keyboard cat', cookie: {maxAge: 60000}, resave: true,
    saveUninitialized: true
}))

app.get('/', async (req, res) => {
    req.session.views = req.session.views ? req.session.views + 1 : 1;

    let userService = new UserService();
    let user = await userService.getUser();

    res.send('Well done!' + req.session.views + JSON.stringify(user));
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})