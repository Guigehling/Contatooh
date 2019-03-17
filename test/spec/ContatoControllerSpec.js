describe("ContatoController", function () {

    var $scope;

    beforeEach(function () {
        module('contatooh');
        inject(function ($injector) {
            $scope = $injector.get('$rootScope').$new();
        });
    });

    it("Deve criar um contato vazio quando nenhum parâmetro de rota for passado", function () {
        inject(function ($controller) {
            $controller('ContatoController', { "$scope": $scope });
            expect($scope.contato._id).toBeUndefined();
        });
    });



});