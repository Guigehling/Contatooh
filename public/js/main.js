angular.module('contatooh', ['ngRoute', 'ngResource'])

    //Após a versão 1.6 do Angular o # foi subistituido por #!, 
    //a configuração abaixo deixa a leitura da URL da mesma forma que a versão anterior.
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    //fim do ajuste.

    .config(function ($routeProvider, $httpProvider) {
        $httpProvider.interceptors.push('meuInterceptor');

        $routeProvider.when('/contatos', {
            templateUrl: 'partials/contatos.html',
            controller: 'ContatosController'
        });

        $routeProvider.when('/contato', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });

        $routeProvider.when('/contato/:contatoId', {
            templateUrl: 'partials/contato.html',
            controller: 'ContatoController'
        });

        $routeProvider.when('/auth', {
            templateUrl: 'partials/auth.html'
        });

        $routeProvider.otherwise({ redirectTo: '/contatos' })
    });