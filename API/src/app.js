//aqui creamos nuestro servidor
//llamamos express
const express = require('express');
const { json } = require('sequelize');
const morgan = require('morgan')
//creamos la constante de express
const app = express();
const mainRouter = require('./routes/index');
//const postsRouter = require()

//midleware
app.use(morgan('dev'));

app.use(express.json());

app.use(mainRouter());




//exportamos para modularizar
module.exports = app;