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
            .when('/', {
                title: 'nieuweOfferte',
                templateUrl: 'php/templates/nieuweOfferte.php',
                controller: 'NieuweOfferteCtrl'
            })
            .otherwise({
                redirectTo: ''
            });
  }])

.controller('ParentController', ['$scope', '$http', function ($scope, $http) {
    "use strict";

    $scope.handleMenuClicked = function (index) {
        $scope.parentVariables[0].selectedMenu = index;
    };

    //default variables
    $scope.showModal = false;
    $scope.parentVariables = [
        {
            titel: "",
            selectedMenu: 1
        }
    ];
    $scope.offerteParent = [
        {
            Offerte: [
                {
                    klantID :0,
                    omschrijving : '',
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
    $scope.Werkzaamheden32 = $scope.offerteParent[0].Werkzaamheden[0].name;
    console.log("eerste werkzaamheid: " + $scope.Werkzaamheden32);


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
            mainMenuName: 'Voorraad',
            mainMenuIcon: 'fa-shopping-cart',
            mainMenuLocation: '#/voorraad'
        }
    ];
}])

.controller('OudeOfferteCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("php/getOffertes.php").success(function (response) {
        $scope.WerkzaamhedenPHP = response.records;
    });
    $scope.showWerkzaamheden = function (ID) {
        console.log(ID);
        $scope.request = $http({
            method: "post",
            url: "php/getOfferte.php",
            data: {
                OfferteID: ID
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("succes! data: ", data);
            $scope.offerteParent[0].Werkzaamheden = data.werkzaamheden;
            $scope.offerteParent[0].offerte = data.offerte;
            $scope.parentVariables[0].titel = data.offerte[0].offerteTitel;
            
            console.log("offerte: ", $scope.offerteParent[0].offerte);

            $scope.parentVariables[0].selectedMenu = 1;
            window.location = "#/nieuweoffertes";
        });

        $scope.request.error(function (data) {
            console.log("error! data: ", data);
            console.log("data werkzaamheden: ", data.werkzaamheden);
        });
    };

}])


.controller('FormuleCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope._stWidth = 5;
    $scope._stLength = 20;
    $scope._vgWidth = 0.4;
    $scope._vgDepth = 3;
    $scope._surface = 10;

}]);