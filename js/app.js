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
    $scope.omschrijvingen = "De klant wilt een Wordpress website waarbij ze zelf een theme uitkiest. Ook de SEO word door ons gedaan. De specifieke aanpassing doen wij ook waarbij de klant wel extra betaald voor de extra gewerkte uren.";

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
            mainMenuName: 'Inloggen',
            mainMenuIcon: 'fa-sign-in',
            mainMenuLocation: '#/login'
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
}])


.controller('OudeOfferteCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("php/getOffertes.php")
        .success(function (response) {
            $scope.WerkzaamhedenPHP = response.records;
        });
    $scope.showWerkzaamheden = function (index) {
        alert("werkID = " + $scope.WerkzaamhedenPHP[index].werkID + "; werkzaamheden = " + $scope.WerkzaamhedenPHP[index].werkTitel + "; Bedrag = " + $scope.WerkzaamhedenPHP[index].werkPrijs);
    }

}]);