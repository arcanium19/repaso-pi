//me traigo el controller
const { default: axios } = require('axios');
const { getAllUsers, getUserByName, getUserById } = require('../Controllers/userController')


//handler
const getUsers = async (req, res)=>{
    // //1. Peticion a la API externa (request).
    // //2. Traer todos los users de la DB.
    // //3. Unir la informacion [API + DB].
    // //4. Hacer un response con la informacion.
    const {name} = req.query;

    // if(name !== undefined){
    //     res.status(200).send('voy a responder con un solo usuario');
    // }else{
    //     res.status(200).send('me traigo todos los usuarios');
    // }

    try{
        const response = await getAllUsers();
        res.status(200).send(response);
    }catch(error){
        res.status(400).json({message: error.message})
    }

}

const getUser = async (req, res)=>{
    
    const { userId } = req.params;

    try{
        const response = await getUserById(userId);
        res.status(200).json(response);

    }catch(error){
        res.status(400).json({message: error.message})
    }


}

const createUser = async (req, res)=>{

    const {name, phone, email} = req.body;

    try{
        const response = await createUser(name, phone, email);
        res.status(200).send(response)
    }catch(error){
        res.status(400).json({message: error.message});
    }

};


module.exports = {
    getUsers,
    getUser,
    createUser
}