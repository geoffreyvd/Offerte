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
        $scope.request = $http({
            method: "post",
            url: "php/postKlant.php",
            data: $scope.nieuwklant,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("postKlant.php succes! data: ", data);
            $scope.refreshKlanten();
        });
        $scope.request.error(function (data) {
            console.log("postKlant.php error! data: ", data);
        });
        $scope.invoerKlanten = !$scope.invoerKlanten;
    };

    $scope.refreshKlanten();    
    $scope.nieuwklant = {};
    $scope.parentVariables[0].selectedMenu = 2;
}]);