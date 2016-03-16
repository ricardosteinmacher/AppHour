'use strict';

angular.module('AppHour')

.controller('AppCtrl', function($scope, $ionicModal, $state, $ionicPopup, $timeout, $ionicActionSheet, $cordovaSocialSharing) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

//  // Form data for the login modal
//  $scope.loginData = {};
//
//  // Create the login modal that we will use later
//  $ionicModal.fromTemplateUrl('templates/login.html', {
//    scope: $scope
//  }).then(function(modal) {
//    $scope.modal = modal;
//  });
//
//  // Triggered in the login modal to close it
//  $scope.closeLogin = function() {
//    $scope.modal.hide();
//  };
//
//  // Open the login modal
//  $scope.login = function() {
//    $scope.modal.show();
//  };
//
//  // Perform the login action when the user submits the login form
//  $scope.doLogin = function() {
//    console.log('Doing login', $scope.loginData);
//
//    // Simulate a login delay. Remove this and replace with your login
//    // code if using a login system
//    $timeout(function() {
//      $scope.closeLogin();
//    }, 1000);
//  };
  
  $scope.ConfirmLogOut = function() {
      
     var confirmPopup = $ionicPopup.confirm({
     title: 'Logout',
     template: 'Você tem certeza que deseja sair do sistema?'
   });

   confirmPopup.then(function(res) {
     if(res) {
         //Sim
         $state.go("welcome");
     } else {
       //Não
     }
   });
  };
    
  // Triggered on a button click, or some other target
 $scope.compartilhar = function() {
   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Facebook' },
       { text: 'WhatsApp' },
       { text: 'Twitter' }
     ],
     destructiveText: '',
     titleText: 'Compartilhar',
     cancelText: 'Cancelar',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
         
         switch(index) {
                case 0:
                    console.log("Facebook");
                    $cordovaSocialSharing
                        .shareViaFacebook("Teste do Facebook", '', "https://www.facebook.com/AppHourBar/")
                    .then(function(result) {

                    }, function(err) {
              
                    });
                break;
                case 1:
                    console.log("Whatsapp");
                    $cordovaSocialSharing
                        .shareViaWhatsApp("Teste do Whatsapp", '', '')
                    .then(function(result) {

                    }, function(err) {
    
                    });
                break;
                case 2:
                    console.log("Twitter");
                    $cordovaSocialSharing
                        .shareViaTwitter("Teste do Twitter", '', '')
                    .then(function(result) {

                    }, function(err) {
                        
                    });
                break;
                default: 
         }
                   
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 10000);
 };  
});
