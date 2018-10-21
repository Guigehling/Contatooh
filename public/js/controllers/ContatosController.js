angular.module('contatooh').controller('ContatosController',
    function ($scope, $resource) {
        $scope.filtro = '';
        $scope.contatos = [];
        $scope.mensagem = { texto: '' };

        var Contato = $resource('/contatos/:id');

        function buscaContatos() {
            Contato.query(
                function (contatos) {
                    $scope.contatos = contatos;
                },
                function (erro) {
                    $scope.mensagem = { texto: 'Não foi possível obter a lista' };
                    console.log(erro);
                }
            );
        }
        buscaContatos();

        $scope.remove = function (contato) {
            Contato.delete({ id: contato._id }).$promise
                .then(buscaContatos())
                .catch(function (erro) {
                    $scope.mensagem = { texto: 'Não foi possível remover o contato' };
                    console.log(erro);
                });
        };
    });