(function(){
    'use strict';

    angular.module('delta')
        .controller('IndexController4', IndexController4);

    /* @ngInject */
    function IndexController4($http, AlertService){
        var vm = this;
        vm.listaDePessoas = [];
        vm.entidade = {};
        vm.salvar = salvar;
        vm.list = list;
        vm.getRowStyle = getRowStyle;
        vm.olaMundo = olaMundo;

        iniciar();

        function iniciar(){
            vm.gridOptions = {
                data: 'vm.listaDePessoas',
                columnDefs:[
                    {field:'nome', displayName:'Nome', width:200},
                    {field:'sobrenome', displayName:'Sobrenome'},
                    {field:'nascimento', displayName:'Data nascimento',
                        width:150, cellTemplate:'app/template/cell-template-date.html'}
                ],
                rowTemplate:'app/template/row-template.html'
            };
        }

        function olaMundo(){
            $http.get('rest/pessoaController/olaMundo?nome=' + vm.nome).then(
                function(response){
                    AlertService.showSuccess(response.data);
                }
            );
        }

        function getRowStyle(linhaSelecionada){
            var style = {};
            style.backgroundColor = linhaSelecionada.cor;
            return style;
        }

        function salvar(){
            $http.post('rest/pessoaController/salvar',vm.entidade).then(
                function(response){
                    var retorno = response.data;
                    AlertService.showSuccess('Registro salvo com sucesso');
                }
            );
        }

        function list(){
            $http.get('rest/pessoaController/list').then(
                function(response){
                    vm.listaDePessoas = response.data;
                }
            );
        }
    }
})();
