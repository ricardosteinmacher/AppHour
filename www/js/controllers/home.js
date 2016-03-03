'use strict';

angular.module('AppHour')

.controller('HomeCtrl', function($scope, $state, $ionicLoading, $http, $cordovaSQLite, $rootScope, $cordovaSocialSharing, $ionicSlideBoxDelegate, DB_local, web_services, $compile) {
    
    
    $scope.montarTela = function () {

        var target1 = document.getElementById("content-div");
        
//        target_cell.innerHTML = '<label class="cell-title">Para comer algo:</label><ion-scroll direction="x" class="cell-scroll"><a class="button cell-scroll-btn">Zapata</a></ion-scroll>';
//       
         return '<div><div class="cell"><label class="cell-title">Para comer algo:</label><ion-scroll direction="x" class="cell-scroll"><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Woods</a><a class="button cell-scroll-btn" ui-sref="app.details">+55</a></ion-scroll></div></div>';
        
//        return '<div><div class="cell"><label class="cell-title">Para comer algo:</label><ion-scroll direction="x" class="cell-scroll scroll-view ionic-scroll scroll-x"><div class="scroll" style="transform: translate3d(0px, 0px, 0px) scale(1);"><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Zapata</a><a class="button cell-scroll-btn" ui-sref="app.details">Woods</a><a class="button cell-scroll-btn" ui-sref="app.details">+55</a></div></ion-scroll></div></div>';
        
//        
//        var divi = document.createElement("div");
//        divi.className = "cell";
//        divi.id="divicell";
//        target1.appendChild(divi);
//        
//        var target_cell = document.getElementById("divicell");
//        var title = document.createElement("label");
//        title.className = "cell-title";
//        title.textContent = "Teste";
//        target_cell.appendChild(title);
//        
//        var scroll = document.createElement("ion-scroll");
//        scroll.className = "cell-scroll scroll-view ionic-scroll scroll-x";
//        scroll.id = "scroll1";
//        scroll.direction = "x";
//        target_cell.appendChild(scroll);
//        
//        var target3 = document.getElementById("scroll1");
//        
//        var subscroll = document.createElement("div");
//        subscroll.className = "scroll";
//        subscroll.id = "testee";
//        //subscroll.style = "transform: translate3d(-92px, 0px, 0px) scale(1);";
//        target3.appendChild(subscroll);
//        
//        var target4 = document.getElementById("testee");
//        
//        var btn = document.createElement("a");
//        btn.className = "button cell-scroll-btn";
//        btn.text = "teste";
//        target4.appendChild(btn);
//        
//        var btn1 = document.createElement("a");
//        btn1.className = "button cell-scroll-btn";
//        btn1.text = "teste";
//        target4.appendChild(btn1);
//        
//        var btn2 = document.createElement("a");
//        btn2.className = "button cell-scroll-btn";
//        btn2.text = "teste";
//        target4.appendChild(btn2);
//        
//        var btn3 = document.createElement("a");
//        btn3.className = "button cell-scroll-btn";
//        btn3.text = "teste";
//        target4.appendChild(btn3);
//        
//        var btn4 = document.createElement("a");
//        btn4.className = "button cell-scroll-btn";
//        btn4.value = "teste";
//        target4.appendChild(btn4);
//        
//        var btn5 = document.createElement("a");
//        btn5.className = "button cell-scroll-btn";
//        btn5.value = "teste";
//        target4.appendChild(btn5);
        
    }
    
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
     }
        
    $scope.doRefresh = function() {
        $rootScope.bares = null;
        navigator.geolocation.getCurrentPosition(function(pos) {
            $scope.cells = [
                {title: 'Reggae', id: 1, bares:[{id:1},{id:1},{id:1},{id:1}]},
                {title: 'Chill', id: 2, bares:[{id:2},{id:2},{id:2},{id:2}] },
                { title: 'Dubstep', id: 3, bares:[{id:3},{id:3},{id:3},{id:3}] },
                { title: 'Indie', id: 4, bares:[{id:1},{id:1},{id:1},{id:1}] },
                { title: 'Rap', id: 5, bares:[{id:1},{id:1},{id:1},{id:1}] },
                { title: 'Cowbell', id: 6, bares:[{id:1},{id:1},{id:1},{id:1}] }
        ];
//            if(navigator.connection.type == Connection.NONE) {
//                window.alert("sem internet");
//                DB_local.getBares(pos.coords.latitude, pos.coords.longitude).then(function(result) {
//                    $scope.$broadcast('scroll.refreshComplete');
//                });
//              }
//            else {
//                web_services.lista_bares(pos.coords.latitude, pos.coords.longitude).then(function(result) {
//                    console.log("com internet");
//                    DB_local.saveHome();
//                    $scope.$broadcast('scroll.refreshComplete');
//                    console.log("montar tela");
            
                   // var meuhtml = $scope.montarTela();
                    //var meuhtmlcompilado =  $compile(meuhtml)($scope);
            
                    //$scope.myHTML = meuhtmlcompilado[0].innerHTML;
    
                    //var target_temp = document.getElementById("content-div");
                    //target_temp.appendChild(meuhtml);
                    //target_temp.innerHTML = meuhtmlcompilado[0].innerHTML;
//                })
//            }
            $scope.$broadcast('scroll.refreshComplete');
      });
    }

    $scope.testWS = function() {
        DB_local.saveHome();
    }
    
    $scope.testDB = function() {
        navigator.geolocation.getCurrentPosition(function(pos) {
            DB_local.getBares(pos.coords.latitude, pos.coords.longitude);
        });
    }
    
    $scope.test = function() {
        DB_local.teste();
    }

    $scope.whatsApp = function() {
        $cordovaSocialSharing
            .shareViaWhatsApp("Teste do Whatsapp", '', '')
            .then(function(result) {
            // Success!
        }, function(err) {
            // An error occurred. Show a message to the user
          });
    }
      
    $scope.facebook = function() {
          $cordovaSocialSharing
              .shareViaFacebook("Teste do Facebook", '', "https://www.facebook.com/AppHourBar/")
          .then(function(result) {
              // Success!
          }, function(err) {
              // An error occurred. Show a message to the user
          });
      }
      
      $scope.twitter = function() {
          $cordovaSocialSharing
              .shareViaTwitter("Teste do Twitter", '', '')
              .then(function(result) {
              // Success!
          }, function(err) {
              // An error occurred. Show a message to the user
          });
      }
});
            
