'use strict';

angular.module('AppHour')

.controller('DetailsCtrl', function($scope, $state, $ionicLoading, $ionicScrollDelegate, barService) {
    $scope.bar = barService.getBar();
    
   // $scope.itens = [{oi:1},{oi:2},{oi:2}];
     $scope.itens = [
         {Nome:'Entradas',Receitas:[
             {Nome:'Salada 1', Preco: '9,99'},
             {Nome:'Salada 2', Preco:'13,99'},
             {Nome:'Sopa 1', Preco: '7,99'},
             {Nome:'Sopa 2', Preco: '11,99'}]
         },
         
         {Nome:'Carnes e Peixes',Receitas:[
             {Nome:'Mignon', Preco: '39,99'},
             {Nome:'Picanha', Preco: '59,99'},
             {Nome:'Entrecot', Preco: '49,99'},
             {Nome:'Tilápia', Preco: '29,99'},
             {Nome:'Salmão', Preco: '39,99'}]
         },
         {Nome:'Acompanhamentos',Receitas:[
             {Nome:'Arroz', Preco: '4,99'},
             {Nome:'Feijão', Preco: '4,99'},
             {Nome:'Purê de Batatas', Preco: '3,99'},
             {Nome:'Salada 1', Preco: '9,99'},
             {Nome:'Salada 2', Preco: '19,99'}]
         },
         {Nome:'Sobremesas',Receitas:[
             {Nome:'Brigadeiros', Preco: '4,99'},
             {Nome:'Cupcake', Preco: '4,99'},
             {Nome:'Gelatina', Preco: '2,99'},
             {Nome:'Suflê Doce', Preco: '9,99'},
             {Nome:'Rocambole', Preco: '19,99'}]
         },
         {Nome:'Bebidas',Receitas:[
             {Nome:'Cerveja 1', Preco: '4,99'},
             {Nome:'Cerveja 2', Preco: '5,99'},
             {Nome:'Cerveja 3', Preco: '6,99'},
             {Nome:'Cerveja 4', Preco: '7,99'},
             {Nome:'Cerveja 5', Preco: '8,99'},
             {Nome:'Coca-cola', Preco: '3,99'},
             {Nome:'Guaraná', Preco: '3,99'},
             {Nome:'Água', Preco: '2,99'},
             {Nome:'Champagne', Preco: '9,99'}]
         }
     ];
    
//    $scope.groups = [];
//    for (var i=0; i<15; i++) {
//        $scope.groups[i] = {
//            name: i,
//            items: []
//        };
//        for (var j=0; j<3; j++) {
//            $scope.groups[i].items.push(i + '-' + j);
//        }
//    }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
          $ionicScrollDelegate.resize();
      } else {
          $scope.shownGroup = group;
          $ionicScrollDelegate.resize();
      }
  }
  $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
  }
  
  $scope.tracarRota = function() {
      console.log("chamou");
      launchnavigator.navigate( [-25.451400, -49.289167], null,
        function(){
          alert("Plugin success");
        },
        function(error){
          alert("Plugin error: "+ error);
        });
  }
    
});