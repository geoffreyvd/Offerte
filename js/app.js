var app = angular.module('OfferteApp', ['ngRoute', 'ngAnimate', 'uiGmapgoogle-maps', 'ui.sortable', 'xeditable']);

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
            .when('/producten', {
                templateUrl: 'templates/producten.html',
                controller: 'productenCtrl'
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

.factory('alertsManager', function () {
    return {
        alerts: {},
        addAlert: function (message, type) {
            this.alerts[type] = this.alerts[type] || [];
            this.alerts[type].push(message);
        },
        clearAlerts: function () {
            if (typeof this.alerts["alert-danger"] !== "undefined") {
                this.alerts["alert-danger"].shift();
                if (this.alerts["alert-danger"].length === 0) {
                    delete this.alerts["alert-danger"];
                };
            };
            if (typeof this.alerts["alert-success"] !== "undefined") {
                this.alerts["alert-success"].shift();
                if (this.alerts["alert-success"].length === 0) {
                    delete this.alerts["alert-success"];
                };
            };
        }
    };
})

.controller('ParentController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    "use strict";

    $scope.handleMenuClicked = function (index) {
        $scope.parentVariables[0].selectedMenu = index;
    };

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
            mainMenuName: 'Oude Offertes',
            mainMenuIcon: 'fa-list-ul',
            mainMenuLocation: '#/oudeoffertes'
        },
        {
            mainMenuName: 'Klanten',
            mainMenuIcon: 'fa-users',
            mainMenuLocation: '#/klanten'
        },
        {
            mainMenuName: 'Producten',
            mainMenuIcon: 'fa-table',
            mainMenuLocation: '#/producten'
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
    
}])

.controller('VoorraadCtrl', ['$scope', function ($scope) {
    $scope.parentVariables[0].selectedMenu = 4;
}])

.controller('MapCtrl', ['$scope', function ($scope) {
    $scope.parentVariables[0].selectedMenu = 5;
}]);