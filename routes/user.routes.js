const express = require('express');
const users = require('../controller/user.controler');
const usersRouter = express.Router();

usersRouter.post('/notes', users.userCreate);
module.exports = usersRouter;
