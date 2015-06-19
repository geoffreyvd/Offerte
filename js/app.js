var app = angular.module('OfferteApp', ['ngRoute', 'uiGmapgoogle-maps', 'ui.sortable', 'xeditable']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider
            .when('/oudeoffertes', {
                templateUrl: 'templates/oudeOfferte.html',
                controller: 'OudeOfferteCtrl'
            })
            .when('/nieuweoffertes', {
                templateUrl: 'templates/nieuweOfferte.html',
                controller: 'NieuweOfferteCtrl'
            })
            .when('/klanten', {
                templateUrl: 'templates/klanten.html',
                controller: 'KlantenCtrl'
            })
            .when('/voorraad', {
                templateUrl: 'templates/voorraad.html',
                controller: 'VoorraadCtrl'
            })
            .when('/map', {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            })
            .when('/', {
                redirectTo: '/nieuweoffertes'
            })
            .otherwise({
                redirectTo: '/nieuweoffertes'
            });
    }])

.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
})

.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
})

.factory('alertsManager', function() {
    return {
        alerts: {},
        addAlert: function(message, type) {
            this.alerts[type] = this.alerts[type] || [];
            this.alerts[type].push(message);
        },
        clearAlerts: function() {
            for(var x in this.alerts) {
           delete this.alerts[x];
        }
        }
    };
})

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
            selectedMenu: null,
            offerteID: null
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
            mainMenuIcon: 'fa-users',
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
    $scope.ingelogd = true;
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

}])

.controller('VoorraadCtrl', ['$scope', function ($scope) {
    $scope.parentVariables[0].selectedMenu = 3;
}])

.controller('MapCtrl', ['$scope', function ($scope) {
    $scope.parentVariables[0].selectedMenu = 4;
}]);