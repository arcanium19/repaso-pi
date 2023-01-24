//para modularizar requerimos router de express
const {Router} = require('express');

//me traigo a userRouter
const {usersRouter} = require('./usersRouter')

//instanciamos router
const mainRouter = Router();


//enrutador modularizando
mainRouter.use('/users', usersRouter);
//mainRouter.use('/users', );

// //metodos HTTP
// app.get('/', (req, res)=>{
//     res.status(200).send('All done!');

// })

// app.get('/users', (req, res)=>{
//     res.status(200).send('All users here!');

// })

// app.get('/users/id', (req, res)=>{
//     res.status(200).send('user by id');

// })

// app.get('/posts', (req, res)=>{
//     res.status(200).send('All posts here!');

// })

// app.get('/posts/id', (req, res)=>{
//     res.status(200).send('post by id');

// })


module.exports = mainRouter;