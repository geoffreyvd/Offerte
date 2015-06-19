app.controller('KlantenCtrl', ['$scope', '$http', function ($scope, $http) {
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
    $scope.deleteKlant = function (klantid) {
        $scope.klantid = klantid;
        $("#bevestigModal").modal('show');
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
            $scope.refreshKlanten();
        });
        $scope.request.error(function (data) {
            console.log("deleteKlant.php error! data: ", data);
        });
    };

    $scope.addKlant = function () {
        $scope.invoerKlanten = !$scope.invoerKlanten;
    };
    $scope.saveKlant = function () {
        console.log($scope.nieuwklant);
        $scope.alleKlanten.push($scope.nieuwklant);
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
}]);