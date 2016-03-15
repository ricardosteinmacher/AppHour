'use strict';

//var db = null;


angular.module('AppHour', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaSQLite, $rootScope) {
  $ionicPlatform.ready(function() {
      //$cordovaStatusBar.style(1) //Light
//    if (window.cordova && window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//      cordova.plugins.Keyboard.disableScroll(true);
//
//    }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            // StatusBar.styleDefault();

        }

//        //Criação do Banco de Dados local
//        db = $cordovaSQLite.openDB("my.db");
////        console.log('DB aberto: ' + db);
////        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS usuario (usu_cod integer primary key, usu_nome text, usu_email text, usu_sexo text, usu_dt_nasc text, usu_tipo text)").then(function(res) {
////            console.log("TABELA USUARIO CRIADA");
//            
//            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS bar (bar_cod integer primary key, bar_nome text, bar_sobre text, bar_horarios text, bar_telefone1 text, bar_telefone2 text, bar_valorentrada text, bar_programacao text, bar_facebook text, bar_site text, bar_latitude text, bar_longitude text, bar_pagante text)").then(function(res) {
//                console.log("TABELA BAR CRIADA");
//                
//                $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS destaque (des_bar_cod text)").then(function(res) {
//                    console.log("TABELA DESTAQUE CRIADA");
//                    
//                    $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS estilo (bar_cod text, est_cod text, est_nome text)").then(function(res) {
//                        console.log("TABELA ESTILO CRIADA");
//                        console.log('DB pronto!');
//                    }, function (err) {
//                        console.error("ERRO CRIAR TABELA ESTILO: " + err);
//                    });
//                    
//                }, function (err) {
//                    console.error("ERRO CRIAR TABELA DESTAQUE: " + err);
//                });
//                }, function (err) {
//                console.error("ERRO CRIAR TABELA BAR: " + err);
//        });
////        }, function (err) {
////            console.error("ERRO CRIAR TABELA USUARIO: " + err);
////        });
        
  });
    
   $rootScope.bares = null;
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
    
    $ionicConfigProvider.tabs.position('bottom');
    
    //Modificações para a chamada de WS funcionar
    $httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.withCredentials = true;
	delete $httpProvider.defaults.headers.common["X-Requested-With"];
	$httpProvider.defaults.headers.common["Accept"] = "application/json";
	$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
	$httpProvider.defaults.headers.put = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
     
    $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html',
      controller: 'WelcomeCtrl'
    })
  
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
  
  .state('app.maps', {
      url: '/maps',
      views: {
        'menuContent': {
          templateUrl: 'templates/maps.html',
          controller: 'MapsCtrl'
        }
      }
    })
  
  .state('app.details', {
      url: '/details',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
          controller: 'DetailsCtrl'
        }
      }
    })
  
  .state('app.options', {
      url: '/options',
      views: {
        'menuContent': {
          templateUrl: 'templates/options.html',
          controller: 'OptionsCtrl'
        }
      }
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/welcome');
})

.constant("HTTP_SERVER_HOST", "http://apphour.rcrema.com.br/appi/")
;