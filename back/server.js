var express = require('express'),   
app = express(),   
port = process.env.PORT || 3000,   
mongoose = require('mongoose'),   
Evento = require('./api/models/EventoModel'),
Album = require('./api/models/AlbumModel'), 
bodyParser = require('body-parser');    
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb+srv://Ernesto:GeFCaFJUhQa6F8b7@cluster0.yvysy.mongodb.net/webInsurgentes?retryWrites=true&w=majority');    
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
var routes = 
require('./api/routes/AlbumRoute');  
routes(app);   
routes = 
require('./api/routes/EventoRoute'); 
routes(app);    
app.listen(port);   
console.log('Servidor para RESTful API de Libros iniciada en puerto 3000: ' + port);