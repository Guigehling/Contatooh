angular.module('contatooh').controller('ContatoController',
    function ($scope, $routeParams, $resource) {
        // console.log($routeParams.contatoId);

        var contatoResource = $resource('/contatos/:id');

        contatoResource.get({ id: $routeParams.contatoId },
            function (contato) {
                $scope.contato = contato;
            },
            function (erro) {
                $scope.menssagem = { texto: 'Não foi possível obter o contato.' };
                console.log(erro);
            }
        );
    })