const { Router } = require('express');

const usersRouter = Router();

usersRouter.get('/', (req, res)=>{
    res.status(200).send('this is a main router about all users');
})

//'localhost://3001/users'

usersRouter.get('/:id', (req, res)=>{
    res.status(200).send('post by id')

})

module.exports = usersRouter;