var express = require('express');

// var home = require('../app/routes/home');
var load = require('express-load');
var bodyparser = require('body-parser')

module.exports = function () {
    var app = express();

    //Variável de ambiente
    app.set('port', 3000);
    //templates
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    //middleware
    app.use(express.static('./public'));
    app.use(bodyparser.urlencoded({ extended: true }))
    app.use(bodyparser.json());
    app.use(require('method-override')());

    // home(app) - rotas;    
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};