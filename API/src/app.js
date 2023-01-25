//aqui creamos nuestro servidor
//llamamos express
const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/index.js');

//creamos la constante de express
const app = express();

//const postsRouter = require()

//midleware
app.use(morgan('dev'));

app.use(express.json());

app.use(mainRouter);




//exportamos para modularizar
module.exports = app;