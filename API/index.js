//importamos app
const app = require('./src/app');

//definimos el puerto
const PORT = 3001;

//levantamos el server
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})