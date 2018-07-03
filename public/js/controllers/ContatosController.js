angular.module('contatooh').controller('ContatosController',
    function ($scope, $resource) {
        $scope.total = 0;

        $scope.incrementa = function () {
            $scope.total++;
        }

        $scope.filtro = '';

        $scope.contatos = [];

        var Contato = $resource('/contatos/:id');

        function buscaContatos() {
            Contato.query(
                function (contatos) {
                    $scope.contatos = contatos;
                },
                function (erro) {
                    console.log("Não foi possível obter a lista de contatos");
                    console.log(erro);
                }
            );
        }

        buscaContatos();
    });