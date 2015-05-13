app.controller('NieuweOfferteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.bekijkPDF = function () {
        if ($scope.parentVariables[0].titel === "") {
            $("#myModal").modal('show');
        } else {
            print();
        }
    };
    $scope.veranderTitel = function () {
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
            i, product;
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
                omschrijving: $scope.omschrijving,
                werkzaamheden: $scope.Werkzaamheden
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("succes! data: " + data);
        });
    };

    $scope.omschrijving = "";
    $scope.date = new Date();
}]);