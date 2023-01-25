//ESTE ARCHIVO ES PARA LEVANTAR EL SERVER
//importamos app
const app = require('./src/app.js');

const sequelize = require('./src/db.js')

//definimos el puerto
const PORT = 3001;

//levantamos el server
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
    sequelize.sync();
})