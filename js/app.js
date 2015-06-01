var app = angular.module('OfferteApp', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider
            .when('/oudeoffertes', {
                templateUrl: 'php/templates/oudeOfferte.php',
                controller: 'OudeOfferteCtrl'
            })
            .when('/nieuweoffertes', {
                templateUrl: 'php/templates/nieuweOfferte.php',
                controller: 'NieuweOfferteCtrl'
            })
            .when('/klanten', {
                templateUrl: 'php/templates/klanten.php',
                controller: 'KlantenCtrl'
            })
            .when('/voorraad', {
                templateUrl: 'php/templates/voorraad.php',
                controller: 'VoorraadCtrl'
            })
            .when('/map', {
                templateUrl: 'php/templates/map.php',
                controller: 'MapCtrl'
            })
            .when('/', {
                redirectTo: '/nieuweoffertes'
            })
            .otherwise({
                redirectTo: '/nieuweoffertes'
            });
    }])

.controller('ParentController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    "use strict";

    $scope.handleMenuClicked = function (index) {
        $scope.parentVariables[0].selectedMenu = index;
    };

    //default variables
    $scope.showModal = false;
    $scope.parentVariables = [
        {
            titel: "",
            selectedMenu: null
        }
    ];
    $scope.offerteParent = [
        {
            Offerte: [
                {
                    klantID: 0,
                    omschrijving: '',
                    offerteTitel: ''
                }
            ],
            Werkzaamheden: [
                {
                    name: '',
                    price: 0
                }
            ]
        }
    ];

    $scope.mainMenuItems = [
        {
            mainMenuName: 'Nieuwe Offerte',
            mainMenuIcon: 'fa-file-pdf-o',
            mainMenuLocation: '#/nieuweoffertes'
        },
        {
            mainMenuName: 'Oude offertes',
            mainMenuIcon: 'fa-list-ul',
            mainMenuLocation: '#/oudeoffertes'
        },
        {
            mainMenuName: 'Klanten',
            mainMenuIcon: 'fa-list-ul',
            mainMenuLocation: '#/klanten'
        },
        {
            mainMenuName: 'Voorraad',
            mainMenuIcon: 'fa-shopping-cart',
            mainMenuLocation: '#/voorraad'
        },
        {
            mainMenuName: 'Map',
            mainMenuIcon: 'fa-map-marker',
            mainMenuLocation: '#/map'
        }
    ];

    $scope.checkPass = function (paswoord) {
        $scope.request3 = $http({
            method: "post",
            url: "php/checkPassword.php",
            data: {
                wachtwoord: paswoord
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request3.success(function (data) {
            console.log("checkPass.php succes! data: ", data);
            $scope.ingelogd = data;

        });
        $scope.request3.error(function (data) {
            console.log("checkPass.php error! data: ", data);
        });
    };
    $scope.ingelogd = true;
}])

.controller('VoorraadCtrl', ['$scope', function ($scope) {
    $scope.parentVariables[0].selectedMenu = 3;
}])

.controller('MapCtrl', ['$scope', function ($scope) {
    $scope.parentVariables[0].selectedMenu = 4;
    /* $scope.map = {
         center: {
             latitude: 52.3941,
             longitude: 4.6668
         },
         zoom: 8
     };
     $scope.options = {
         scrollwheel: false
     };
     var events = {
         places_changed: function (searchBox) {}
     }
     $scope.searchbox = {
         template: 'searchbox.tpl.html',
         events: events
     };*/
}]);