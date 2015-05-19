var app = angular.module('OfferteApp', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider
            .when('/oudeoffertes', {
                title: 'Oudeoffertes',
                templateUrl: 'php/templates/oudeOfferte.php',
                controller: 'OudeOfferteCtrl'
            })
            .when('/nieuweoffertes', {
                title: 'nieuweOfferte',
                templateUrl: 'php/templates/nieuweOfferte.php',
                controller: 'NieuweOfferteCtrl'
            })
            .when('/formule', {
                title: 'formule',
                templateUrl: 'php/templates/formule.php',
                controller: 'FormuleCtrl'
            })
            .when('/klanten', {
                title: 'klanten',
                templateUrl: 'php/templates/klanten.php',
                controller: 'KlantenCtrl'
            })
            .when('/', {
                title: 'nieuweOfferte',
                templateUrl: 'php/templates/nieuweOfferte.php',
                controller: 'NieuweOfferteCtrl'
            })
            .otherwise({
                redirectTo: ''
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
            mainMenuName: 'formule',
            mainMenuIcon: 'fa-calculator',
            mainMenuLocation: '#/formule'
        },
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
        }
    ];
}])

.controller('KlantenCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.parentVariables[0].selectedMenu = 3;
    $scope.request = $http({
        method: "post",
        url: "php/getAllKlanten.php",
        data: {},
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    $scope.request.success(function (data) {
        console.log("getAllKlanten.php succes! data: ", data);
        $scope.alleKlanten = data.klanten;
    });
    $scope.request.error(function (data) {
        console.log("error! data: ", data);
    });

}])

.controller('FormuleCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.parentVariables[0].selectedMenu = 4;
    $scope._stWidth = 5;
    $scope._stLength = 20;
    $scope._vgWidth = 0.4;
    $scope._vgDepth = 3;
    $scope._surface = 10;

}]);