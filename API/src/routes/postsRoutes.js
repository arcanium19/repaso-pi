const { Router } = require('express');

//por razones de tiempo se creo un usuario asociado a un modelo aqui mismo
const { Post, User } = require('../db')

const postsRouter = Router();

postsRouter.get('/', (req, res)=>{

    res.status(200).send('all done!')
})

postsRouter.get('/:id', (req, res)=>{

    res.status(200).send('post by id')
})

postsRouter.post('/', (req, res)=>{
    const { title, body, idUser } = req.body;
    try{
        const post = Post.create({title, body});//primero se crea el post y luego se le asocia el ID
        post.setUser(idUser);
        res.status(200).send('Post created');
    }catch(error){
        res.status(400).json({message: error.message});
    }
    
})

module.exports = postsRouter;