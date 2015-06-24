app.controller('KlantenCtrl', ['$scope', '$http', 'alertsManager', function ($scope, $http, alertsManager) {

    $scope.fadeAlerts = function () {
        setTimeout(function () {
            $scope.$apply(function () {
                alertsManager.clearAlerts();
            });
        }, 4000);
    };

    $scope.addKlant = function () {
        $scope.invoerKlanten = !$scope.invoerKlanten;
    };

    $scope.deleteKlant = function (klantid) {
        $scope.klantid = klantid;
        $("#bevestigModal").modal('show');
    };

    ////alle php connecties
    $scope.refreshKlanten = function () {
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
    };

    $scope.deleteKlant2 = function () {
        $scope.request = $http({
            method: "post",
            url: "php/deleteKlant.php",
            data: {
                klantid: $scope.klantid
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("deleteKlant.php succes! data: ", data);
            alertsManager.addAlert('Klant verwijdert, klantid: ' + $scope.klantid, 'alert-success');
            $scope.fadeAlerts();
            $scope.refreshKlanten();
        });
        $scope.request.error(function (data) {
            console.log("deleteKlant.php error! data: ", data);
        });
    };

    $scope.saveKlant = function () {
        //check if nieuwproduct is valid
        if (!jQuery.isEmptyObject($scope.nieuwklant)) {
            console.log($scope.nieuwklant);
            $scope.alleKlanten.push($scope.nieuwklant);
        };
        ///sla alle klanten, inclusief aangepaste klanten, op in de database
        $scope.request = $http({
            method: "post",
            url: "php/postAllKlanten.php",
            data: $scope.alleKlanten,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("postAllKlanten.php succes! data: ", data);
            alertsManager.addAlert('klanten opgeslagen', 'alert-success');
            $scope.fadeAlerts();
            $scope.refreshKlanten();
        });
        $scope.request.error(function (data) {
            console.log("postAllKlanten.php error! data: ", data);
        });
        $scope.invoerKlanten = !$scope.invoerKlanten;
    };

    $scope.refreshKlanten();
    $scope.nieuwklant = {};
    $scope.parentVariables[0].selectedMenu = 2;
    $scope.alerts = alertsManager.alerts;
    alertsManager.clearAlerts();
}]);