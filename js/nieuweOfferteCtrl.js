app.controller('NieuweOfferteCtrl', ['$scope', '$http', '$log', 'alertsManager', function ($scope, $http, $log, alertsManager) {
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

    $scope.addWerkzaamheid = function () {
        $scope.bedrag = 0;
        var Werkzaamheid = {
            name: $scope.naam,
            price: $scope.bedrag
        };
        $scope.Werkzaamheden.push(Werkzaamheid);
    };
    $scope.addTekst = function () {
        $scope.bedrag = "0geen bedrag";
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
    $scope.fadeAlerts = function () {
        setTimeout(function () {
            $scope.$apply(function () {
                alertsManager.clearAlerts();
            });
        }, 4000);
    };
    $scope.uploadHuidigeOfferte = function () {
        //exception: als er geen offerte is geselecteerd is
        if ($scope.parentVariables[0].offerteID === null) {
            $log.warn("Geen bestaande offerte geselecteerd");
            alertsManager.addAlert('Geen bestaande offerte geselecteerd', 'alert-danger');
            $scope.fadeAlerts();
        } else {
            $scope.request = $http({
                method: "post",
                url: "php/postCurrentOfferte.php",
                data: {
                    offerteid: $scope.parentVariables[0].offerteID,
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
                $log.info("postCurrentOfferte.php succes! data: " + data);
                alertsManager.addAlert('Bestaande offerte overschreven, offerte ID:' + $scope.parentVariables[0].offerteID, 'alert-success');
                $scope.fadeAlerts();
            });
        };
    };

    $scope.uploadNieuweOfferte = function () {
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
            $log.info("postOfferte.php succes! data: " + data);
            alertsManager.addAlert('Nieuwe offerte opgeslagen, offerte ID:' + data, 'alert-success');
            $scope.fadeAlerts();
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
    $scope.parentVariables[0].selectedMenu = 0;
    $scope.getKlanten();
    $scope.Werkzaamheden = $scope.offerteParent[0].Werkzaamheden;
    $scope.date = new Date();

    $scope.alerts = alertsManager.alerts;
}]);