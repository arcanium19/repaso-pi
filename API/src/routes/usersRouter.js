const { Router } = require('express');
const {getUser, getUsers, createUser} = require('../handlers/usersHandlers.js')

const usersRouter = Router();


usersRouter.get('/', getUsers);


usersRouter.get('/:userId', getUser);


usersRouter.post('/', createUser);


module.exports = usersRouter;