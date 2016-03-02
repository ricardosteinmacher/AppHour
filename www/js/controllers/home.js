'use strict';

angular.module('AppHour')

.controller('HomeCtrl', function($scope, $state, $ionicLoading, $http, $cordovaSQLite, $rootScope, $cordovaSocialSharing, $ionicSlideBoxDelegate, DB_local, web_services) {
    
    
    $scope.montarTela = function () {
        var target = document.getElementById("content-div");
        console.log(target);
        
        var btn = document.createElement("input");
        btn.type = "div";
        
       // btn.style="background-image: url(img/rest-"+i+".jpg);";
        btn.class="child-item button";
        btn.value="button_'+i+'";
        
        btn.name = "button";
        btn.value = "Click Me";
        btn.id = "id";
        btn.href = "app.details";
        
        target.appendChild(btn);
    }
    
    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
     }
        
    $scope.doRefresh = function() {
        $rootScope.bares = null;
        navigator.geolocation.getCurrentPosition(function(pos) {
            
            if(navigator.connection.type == Connection.NONE) {
                window.alert("sem internet");
                DB_local.getBares(pos.coords.latitude, pos.coords.longitude).then(function(result) {
                    $scope.$broadcast('scroll.refreshComplete');
                });
              }
            else {
                web_services.lista_bares(pos.coords.latitude, pos.coords.longitude).then(function(result) {
                    console.log("com internet");
                    DB_local.saveHome();
                    $scope.$broadcast('scroll.refreshComplete');
                    console.log("montar tela");
                    //$scope.montarTela();
                })
            }
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
            
