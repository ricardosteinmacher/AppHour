'use strict';

angular.module('AppHour')

//.controller('MapsCtrl', function($scope, $stateParams,  $ionicLoading) {
//    $scope.init = function() {
//     
//        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
//      
//        var mapOptions = {
//            center: myLatlng,
//            zoom: 16,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//        
//        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   
//        navigator.geolocation.getCurrentPosition(function(pos) {
//            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
//            var myLocation = new google.maps.Marker({
//                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
//                map: map,
//                title: "My Location"
//            });
//        });
//   
//        $scope.map = map;
//    };      
//});

.controller('MapsCtrl', function($scope, $stateParams,  $ionicLoading, $rootScope) {
   
    // Map Settings // 
    $scope.initialise = function() {
        var i=0;
        var places=[];
        for(var cat in $rootScope.bares)
                    {
                        //console.log(bares[cat].est_nome +":");
                        var j=0;
                        for (var est_bares in $rootScope.bares[cat].est_bares) 
                        {
                            var bar = $rootScope.bares[cat].est_bares[j];
                            places[i] = {
                                city : bar.bar_nome,
                                desc : bar.bar_distancia,
                                lat : bar.bar_latitude,
                                long : bar.bar_longitude
                            };
                            console.log(i);
                            //console.log("  - " + bar.bar_nome + " / ID: " + bar.bar_cod + " / " + bar.bar_distancia);
                            j++;
                            i++;
                        }
                    }
        console.log(places);
        
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        // Create Map //
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      
        var icone = {
            url: "http://i.stack.imgur.com/bKX1s.png",
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(33, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        
        // Geo Location //
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                icon: icone,
                //animation: google.maps.Animation.DROP,
                title: "My Location"
            });
        });
        $scope.map = map;
        
        // Additional Markers //
        var icone1 = {
            url: "img/maps/teste2.png",
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(33, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                icon:icone1,
                //shape: shape,
                title: info.city,
                zIndex: 1
            });
            
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }

        var i = 0;
        for (var aux in places)
            {
                createMarker(places[i]);
                i++;
            }
        
    };
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
    
});