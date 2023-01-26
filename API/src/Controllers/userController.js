const { default: axios } = require("axios");
const { User } = require('../db');


const cleanInfo = (info)=>{
    info.map( item => {
        return {
            name: item.name,
            email: item.email,
            phone: item.phone,
            created: false, //para que cuando le aplique la fcion a la api, se le cree esta propiedad y lograr diferenciar info de la api y de la DB
        }
    })
}

const getAllUsers = async ()=>{
    //para traer de la api usaremos AXIOS
    const apiInfo = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
    
    const infoCleaned = cleanInfo(apiInfo);
 
    //traemos la info de la DB
    const dbInfo = await User.findAll();
    //combinamos ambas infos
    return [...infoCleaned, ...dbInfo];
}

const getUserByName = async (name)=>{

    //REVISAR ESTE CODIGO
    const apiInfo = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
    const infoFiltered = apiInfo.filter(item => item.name === name)
    //todo esto puede estar mal copiado, REVISAR EN CASO DE QUE NO FUNCIONE EL FILTRADO
    const infoDBfiltered = User.findAll({where: {name: name}})
    //traemos la info de la DB
    //combinamos ambas infos
    return [...infoFiltered, ...infoDBfiltered];
}

const getUserById = async (id)=>{

    const infoDB = User.findByPk(id)
    //para traer de la api usaremos AXIOS
    const apiInfo = (await axios.get('https://jsonplaceholder.typicode.com/users')).data

    const infoFiltered = apiInfo.filter(item => item.id === id);
    
    //combinamos ambas infos
    return [...infoFiltered, ...infoDB];
}

const createUserDB = async (email, name, phone)=>{
    const user = await User.create({email, name, phone});
    return user;
}

module.exports = {
    getAllUsers, 
    getUserByName, 
    getUserById,
    createUserDB
}