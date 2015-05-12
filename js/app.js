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
        $scope.selectedMenu = index;
    };
    $scope.showModal = false;
    $scope.titel = "Offerte systeem";
    $scope.omschrijving = "De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.";

    //default variables
    $scope.Werkzaamheden = [
        {
            name: 'Wordpress Website',
            price: 450
        },
        {
            name: 'Wordpress Theme',
            price: 50
        },
        {
            name: 'SEO',
            price: 80
        },
        {
            name: 'Specifieke wensen',
            price: 120
        }
    ];
    $scope.mainMenuItems = [
        {
            mainMenuName: 'formule',
            mainMenuIcon: 'fa-sign-in',
            mainMenuLocation: '#/formule'
        },
        {
            mainMenuName: 'Nieuwe Offerte',
            mainMenuIcon: 'fa-user',
            mainMenuLocation: '#/nieuweoffertes'
        },
        {
            mainMenuName: 'Oude offertes',
            mainMenuIcon: 'fa-users',
            mainMenuLocation: '#/oudeoffertes'
        },
        {
            mainMenuName: 'Voorraad beheer',
            mainMenuIcon: 'fa-shopping-cart',
            mainMenuLocation: '#/voorraad'
        }
    ];
    $scope.selectedMenu = 1;
}])


.controller('NieuweOfferteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.bekijkPDF = function () {
        $("#myModal").modal('show');
    };
    $scope.addPerson = function () {
        $scope.bedrag = 0;
        var Werkzaamheid = {
            name: $scope.naam,
            price: $scope.bedrag
        };
        $scope.Werkzaamheden.push(Werkzaamheid);
    };
    $scope.removePerson = function (index) {
        $scope.Werkzaamheden.splice(index, 1);
    };
    $scope.getTotal = function () {
        var total = 0,
            price = 0,
            i, product;
        for (i = 0; i < $scope.Werkzaamheden.length; i++) {
            product = $scope.Werkzaamheden[i];
            price = parseFloat(product.price);
            total += price;
        }
        return total;
    };
    $scope.veranderTitel = function () {
        $scope.titel = $scope.nieuweTitel;
        setTimeout(function () {
            print();
        }, 500);
    };


    $scope.uploadOfferte = function () {
        $scope.request2 = $http({
            method: "post",
            url: "php/postOfferte.php",
            data: {
                titel: $scope.titel,
                omschrijving: $scope.omschrijving,
                werkzaamheden: $scope.Werkzaamheden
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request2.success(function (data) {
            console.log("succes! data: " + data);
        });
    };
}])


.controller('OudeOfferteCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("php/getOffertes.php").success(function (response) {
        $scope.WerkzaamhedenPHP = response.records;
    });
    $scope.showWerkzaamheden = function (index) {
        alert("werkID = " + $scope.WerkzaamhedenPHP[index].werkID + "; werkzaamheden = " + $scope.WerkzaamhedenPHP[index].werkTitel + "; Bedrag = " + $scope.WerkzaamhedenPHP[index].werkPrijs);
    };

}])


.controller('FormuleCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope._stWidth = 5;
    $scope._stLength = 20;
    $scope._vgWidth = 0.4;
    $scope._vgDepth = 3;
    $scope._surface = 10;

}]);