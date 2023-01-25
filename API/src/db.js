const { Sequelize, DataTypes, Model } = require('sequelize')
require('dotenv').config();

//esto nos permite hacer destructoring de las variables de .env
const { USERNAME_DB, PASSWORD_DB, NAME_DB, HOST_DB } = require(process.env);

const sequelize = new Sequelize(`postgres://${USERNAME_DB}:${PASSWORD_DB}@${HOST_DB}/${NAME_DB}`); // Example for postgres


const UserModel = require('./models/userModel.js');
const PostModel = require('./models/postModels.js');

UserModel(sequelize);
PostModel(sequelize);

//nos traemos los modelos
const { Post, User } = sequelize.models;

//relacion 1:n (uno a muchos) un usuario puede tener muchos posteos
//pero cada posteo solo pertenece a un usuario

User.hasMany(Post);
Post.belongsTo(User);

//en caso q sea n:n en ambos se hacen belongsToMany y hay q gacer la tabla intermedia
//En el caso del PI countries
//Counrty.belongsToMany(Activities, { through: 'Country_Activities});
//Activities.belongsToMany(Countries, { through: 'Country_Activities});


module.exports = sequelize;