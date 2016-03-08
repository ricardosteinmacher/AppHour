'use strict';

angular.module('AppHour')

.controller('DetailsCtrl', function($scope, $state, $ionicLoading, $ionicSlideBoxDelegate, barService) {
    $scope.bar = barService.getBar();
    
});