const { Router } = require('express');

const postsRouter = Router();

postsRouter.get('/', (req, res)=>{

    res.status(200).send('all done!')
})

postsRouter.get('/:id', (req, res)=>{

    res.status(200).send('post by id')
})

module.exports = postsRouter;