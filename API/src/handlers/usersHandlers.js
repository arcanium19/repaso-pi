//handler
const getUsers = (req, res)=>{
    // //1. Peticion a la API externa (request).
    // //2. Traer todos los users de la DB.
    // //3. Unir la informacion [API + DB].
    // //4. Hacer un response con la informacion.
    const {name} = req.query;

    if(name !== undefined){
        res.status(200).send('voy a responder con un solo usuario');
    }else{
        res.status(200).send('me traigo todos los usuarios');
    }

}

const getUser = (req, res)=>{

    const {userId} = req.params;

    res.status(200).send({id});

}

const createUser = (req, res)=>{

    const {name, phone, email} = req.body;

    res.status(200).send({name, phone, email});

};


module.exports = {
    getUsers,
    getUser,
    createUser
}