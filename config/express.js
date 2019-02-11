var express = require('express');

// var home = require('../app/routes/home');

var load = require('express-load');
var bodyparser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

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

    //export dependencies
    app.use('/node_modules', express.static('./node_modules'));

    //Autenticação
    app.use(cookieParser());
    app.use(session(
        {
            secret: 'homem avestruz',
            resave: true,
            saveUninitialized: true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());

    //Helmet
    app.use(helmet.frameguard());
    app.use(helmet.xssFilter());
    app.use(helmet.noSniff());
    app.disable('x-powered-by');

    //Home(app) - rotas;    
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    //Se nenhuma rota atender, direciona para a página 404
    app.get('*', function (req, res) {
        res.status(404).render('404');
    });

    return app;
};