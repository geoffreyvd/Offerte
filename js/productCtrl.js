app.controller('productenCtrl', ['$scope', '$http', 'alertsManager', function ($scope, $http, alertsManager) {

    $scope.fadeAlerts = function () {
        setTimeout(function () {
            $scope.$apply(function () {
                alertsManager.clearAlerts();
            });
        }, 4000);
    };

    $scope.editProduct = function () {
        $scope.invoerProducten = !$scope.invoerProducten;
    };

    $scope.deleteProduct = function (productid) {
        $scope.productid = productid;
        $("#bevestigModal").modal('show');
    };

    ///alle php connecties
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
            $scope.alleProducten = data.producten;
        });
        $scope.request.error(function (data) {
            console.log("getProducten error! data: ", data);
        });
    };

    $scope.deleteProduct2 = function () {
        $scope.request = $http({
            method: "post",
            url: "php/deleteProduct.php",
            data: {
                productid: $scope.productid
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("deleteProduct.php succes! data: ", data);
            alertsManager.addAlert('product verwijdert, product id: ' + $scope.productid, 'alert-success');
            $scope.fadeAlerts();
            $scope.refreshProducten();
        });
        $scope.request.error(function (data) {
            console.log("deleteProduct.php error! data: ", data);
        });
    };

    $scope.saveProduct = function () {
        //check if nieuwproduct is valid
        if (!jQuery.isEmptyObject($scope.nieuwProduct)) {
            console.log($scope.nieuwProduct);
            $scope.alleProducten.push($scope.nieuwProduct);
        };
        ///sla alle producten, inclusief aangepaste producten, op in de database
        $scope.request = $http({
            method: "post",
            url: "php/postProducten.php",
            data: $scope.alleProducten,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("postProducten.php succes! data: ", data);
            alertsManager.addAlert('producten opgeslagen', 'alert-success');
            $scope.fadeAlerts();
            $scope.refreshProducten();
        });
        $scope.request.error(function (data) {
            console.log("postProducten.php error! data: ", data);
        });

        $scope.invoerProducten = !$scope.invoerProducten;
    };

    $scope.nieuwProduct = {};
    $scope.parentVariables[0].selectedMenu = 3;
    $scope.refreshProducten();
    $scope.alerts = alertsManager.alerts;
    alertsManager.clearAlerts();
}]);