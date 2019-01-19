angular.module('contatooh')
    .controller('ContatosController', function ($scope, Contato) {

        // Não é mais necessario quando se usa o service Contato
        // var contatoResource = $resource('/contatos/:id');

        $scope.filtro = '';
        $scope.contatos = [];
        $scope.mensagem = { texto: '' };

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