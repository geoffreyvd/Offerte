app.controller('OudeOfferteCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    $scope.parentVariables[0].selectedMenu = 1;
    $http.get("php/getOffertes.php").success(function (response) {
        $scope.WerkzaamhedenPHP = response.records;
    });
    $scope.showWerkzaamheden = function (ID) {
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

            window.location = "#/nieuweoffertes";
        });
        $scope.request.error(function (data) {
            console.log("error! data: ", data);
            console.log("data werkzaamheden: ", data.werkzaamheden);
        });
    };

}]);