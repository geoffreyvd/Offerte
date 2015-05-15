app.controller('NieuweOfferteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.colors = [
      {name:'black', shade:'dark'},
      {name:'white', shade:'light', notAnOption: true},
      {name:'red', shade:'dark'},
      {name:'blue', shade:'dark', notAnOption: true},
      {name:'yellow', shade:'light', notAnOption: false}
    ];
    $scope.myColor = $scope.colors[2]; // red
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
                omschrijving: $scope.offerteParent[0].offerte[0].omschrijving,
                werkzaamheden: $scope.Werkzaamheden,
                klantid: $scope.offerteParent[0].offerte[0].klantID
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        $scope.request.success(function (data) {
            console.log("succes! data: " + data);
        });
    };

    $scope.Werkzaamheden = $scope.offerteParent[0].Werkzaamheden;
    $scope.date = new Date();
}]);