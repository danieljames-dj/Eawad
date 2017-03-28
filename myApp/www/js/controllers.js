angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('pickUp', function($scope) {
  google.maps.event.addDomListener(window, 'load', function() {
    var myLatlng = new google.maps.LatLng(37.3000, -120.4833);
    var mapOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  });
  // google.maps.event.addDomListener(window, 'load', function() {
      // var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

  //     var mapOptions = {
  //         center: myLatlng,
  //         zoom: 16,
  //         mapTypeId: google.maps.MapTypeId.ROADMAP
  //     };

  //     map.addEventListener(plugin.google.maps.event.MAP_READY, function() {
        // map.addMarker({
        //   'position': mapOptions,
        //   'title': "Hello GoogleMap for Cordova!"
        // }, function(marker) {

        //   marker.showInfoWindow();

        // });
  //     });

      // var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //     navigator.geolocation.getCurrentPosition(function(pos) {
  //         map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
  //         var myLocation = new google.maps.Marker({
  //             position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
  //             map: map,
  //             title: "My Location"
  //         });
  //     });

  //     $scope.map = map;
  // });
  // google.maps.event.addListener(map, 'click', function(event) {
  //   marker = new google.maps.Marker({
  //     position: event.latLng,
  //     map: map
  //   });
  //   console.log(marker);
  // });
  // var position = new google.maps.LatLng(37.3000, -120.4833);
})

.controller('itemsList', function($scope) {
  $scope.list = [
    { title: 'Item A', min: 0, max: 30, perUnit: 20 },
    { title: 'Item B', min: 0, max: 30, perUnit: 30 },
    { title: 'Item C', min: 0, max: 30, perUnit: 40 },
    { title: 'Item D', min: 0, max: 30, perUnit: 50 },
    { title: 'Item E', min: 0, max: 30, perUnit: 60 },
    { title: 'Item F', min: 0, max: 10, perUnit: 70 }
  ];
  for (var i = 0; i < $scope.list.length; i++)
    $scope.list[i].val = 5;
  $scope.total = function() {
    var total = 0;
    for (var i = 0; i < $scope.list.length; i++)
      total += $scope.list[i].perUnit * $scope.list[i].val;
    return total;
  }
})

.controller('tariffList', function($scope) {
  $scope.list = [
    { title: 'Item A', perUnit: 20 },
    { title: 'Item B', perUnit: 30 },
    { title: 'Item C', perUnit: 40 },
    { title: 'Item D', perUnit: 50 },
    { title: 'Item E', perUnit: 60 },
    { title: 'Item F', perUnit: 70 }
  ];
})

.controller('faqHelp', function($scope) {
  $scope.qnList = [
    { qn: 'What is A?', ans: 'AAA' },
    { qn: 'What is B?', ans: 'BBB' },
    { qn: 'What is C?', ans: 'CCC' },
    { qn: 'What is D?', ans: 'DDD' },
    { qn: 'What is E?', ans: 'EEE' },
    { qn: 'What is F?', ans: 'FFF' },
    { qn: 'What is G?', ans: 'GGG' }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
