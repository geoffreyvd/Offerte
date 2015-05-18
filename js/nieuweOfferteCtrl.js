app.controller('NieuweOfferteCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    "use strict";
    $scope.bekijkPDF = function () {
        if ($scope.parentVariables[0].titel === "") {
            $("#myModal").modal('show');
        } else {
            print();
        }
    };
    $scope.veranderTitel = function () {
        ///handling modal
        $scope.parentVariables[0].titel = $scope.nieuweTitel;
        setTimeout(function () {
            print();
        }, 500);
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
            product,
            i;
        for (i = 0; i < $scope.Werkzaamheden.length; i++) {
            product = $scope.Werkzaamheden[i];
            price = parseFloat(product.price);
            total += price;
        }
        return total;
    };

    $scope.uploadOfferte = function () {
        $scope.request = $http({
            method: "post",
            url: "php/postOfferte.php",
            data: {
                titel: $scope.parentVariables[0].titel,
                omschrijving: $scope.offerteParent[0].Offerte[0].omschrijving,
                werkzaamheden: $scope.Werkzaamheden,
                klantid: $scope.selectedKlant.clientID
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            $log.info("succes! data: " + data);
        });
    };

    $scope.getKlanten = function () {
        $scope.request = $http({
            method: "post",
            url: "php/getKlanten.php",
            data: {},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("getKlanten.php succes! data: ", data);
            $scope.klanten = data.klanten;
            $scope.selectedKlant = $scope.klanten[$scope.offerteParent[0].Offerte[0].klantID - 1];
        });
    };

    $scope.selectedKlant = {};
    $scope.parentVariables[0].selectedMenu = 1;
    $scope.getKlanten();
    $scope.Werkzaamheden = $scope.offerteParent[0].Werkzaamheden;
    $scope.date = new Date();
}]);