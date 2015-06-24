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
    
    $scope.addProduct = function (titel,prijs) {
        var Werkzaamheid = {
            name: titel,
            price: prijs
        };
        $scope.Werkzaamheden.push(Werkzaamheid);
    };

    $scope.deleteRow = function (index) {
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
    
    
    
    ////Alle connecties met php, voor het ophalen en opslana van data in de database    
    
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
            $scope.request.error(function (data) {
                $log.info("postCurrentOfferte.php error! data: " + data);
                alertsManager.addAlert('Fout opgetreden bij het opslaan van de offerte, check console', 'alert-danger');
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
        $scope.request.error(function (data) {
            $log.info("postOfferte.php error! data: " + data);
            alertsManager.addAlert('Fout opgetreden bij het opslaan van de offerte, check console', 'alert-danger');
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
        $scope.request.error(function (data) {
            console.log("getKlanten.php error! data: ", data);
            alertsManager.addAlert('Fout opgetreden bij het ophalen van de klanten, check console', 'alert-danger');
            $scope.fadeAlerts();
        });
    };

    ///get products, pre-defined products in a list
    $scope.refreshProducten = function () {
        $scope.request = $http({
            method: "post",
            url: "php/getProducten.php",
            data: {},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("getProducten.php succes! data: ", data);
            $scope.producten = data.producten;
        });
        $scope.request.error(function (data) {
            console.log("getProducten error! data: ", data);
        });
    };
    
    
    ///Alle voor gedefiniteerde waardes --- deze worden eenmalig ingeladen bij het aanspreken van deze controller
    
    $scope.refreshProducten();
    $scope.getKlanten();
    $scope.selectedKlant = {};
    $scope.date = new Date();
    $scope.parentVariables[0].selectedMenu = 0;
    $scope.Werkzaamheden = $scope.offerteParent[0].Werkzaamheden;
    $scope.alerts = alertsManager.alerts;
    alertsManager.clearAlerts();
}]);