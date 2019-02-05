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
            Swal.fire({
                title: 'Tem certeza?',
                text: "Você não poderá reverter a remoção!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, destrua-o!',
                cancelButtonText: 'Não'
            })
                .then((result) => {
                    if (result.value) {
                        Contato.delete({ id: contato._id }).$promise
                            .then(() => {
                                buscaContatos();
                                Swal.fire(
                                    'Removido!',
                                    'O contato foi removido.',
                                    'success'
                                );
                            })
                            .catch(function (erro) {
                                $scope.mensagem = { texto: 'Não foi possível remover o contato' };
                                console.log(erro);
                            });
                    }
                });
        };
    });