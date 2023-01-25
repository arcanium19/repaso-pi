//importamos los dataTypes para que trabajen
const { DataTypes } = require("sequelize");

//modularizamos el modelo
module.exports = (sequelize)=>{

        sequelize.define('User', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
        
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            phone:{
                type: DataTypes.INTEGER,
                allowNull: false
            }
        
        },{timestamps: false})
}