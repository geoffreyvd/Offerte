app.controller('OudeOfferteCtrl', ['$scope', '$http', '$log', 'alertsManager', function ($scope, $http, $log, alertsManager) {    

    $http.get("php/getOffertes.php").success(function (response) {
        $scope.WerkzaamhedenPHP = response.records;
    });

    $scope.zoekOfferte = function (zoekterm) {
        console.log(zoekterm);
        console.log("zoekOfferte functie");
        $scope.request = $http({
            method: "post",
            url: "php/searchOfferte.php",
            data: {
                trefwoord: zoekterm
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("zoekOfferte.php succes! data: ", data);
            $scope.WerkzaamhedenPHP = data.records;
        });
        $scope.request.error(function (data) {
            console.log("zoekOfferte.php error! data: ", data);
        });
    };

    $scope.showWerkzaamheden = function (ID) {
        $scope.parentVariables[0].offerteID = ID;
        $log.info("offerte id: " + ID);
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
            console.log("getOfferte.php succes! data: ", data);
            $scope.offerteParent[0].Werkzaamheden = data.werkzaamheden;
            $scope.offerteParent[0].Offerte = data.offerte;
            $scope.parentVariables[0].titel = data.offerte[0].offerteTitel;

            console.log("klantID : " + $scope.offerteParent[0].Offerte[0].klantID);

            alertsManager.addAlert('Bestaande offerte overschreven, offerte ID:' + $scope.parentVariables[0].offerteID, 'alert-success');
            $scope.fadeAlerts();
            window.location = "#/nieuweoffertes";
        });
        $scope.request.error(function (data) {
            console.log("error! data: ", data);
            console.log("data werkzaamheden: ", data.werkzaamheden);
        });
    };

    $scope.deleteOfferte = function (werkzaamheidID) {
        $scope.werkzaamheidID = werkzaamheidID;
        $("#bevestigOfferteModal").modal('show');
    };

    $scope.deleteOfferte2 = function () {
        $scope.request = $http({
            method: "post",
            url: "php/deleteOfferte.php",
            data: {
                OfferteID: $scope.werkzaamheidID
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("deleteOfferte.php succes! data: ", data);
            $http.get("php/getOffertes.php").success(function (response) {
                $scope.WerkzaamhedenPHP = response.records;
            });
        });
        $scope.request.error(function (data) {
            console.log("deleteOfferte.php error! data: ", data);
        });
    };

    $scope.fadeAlerts = function () {
        setTimeout(function () {
            $scope.$apply(function () {
                alertsManager.clearAlerts();
            });
        }, 4000);
    };
    
    $scope.parentVariables[0].selectedMenu = 1;    
}]);