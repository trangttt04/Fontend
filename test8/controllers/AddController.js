window.AddController = function ($scope, $http, $location) {
    var api = "http://localhost:3000/category";
    var apiUrl = "http://localhost:3000/product";

    $http.get(api).then(function (response) {
        $scope.category = response.data;
        console.log($scope.category);
    })

    $scope.onAdd = function () {
        let check = true;
        $scope.validate = {
            ten: "",
            gia: "",
            hang: "",
            kich_thuoc: "",
        }
        if (!$scope.input || !$scope.input.ten) {
            check = false;
            $scope.validate.ten = "Ten k dc de trong";
        }
        if (!$scope.input || !$scope.input.gia) {
            check = false;
            $scope.validate.gia = "gia k dc de trong";
        } else {
            if (isNaN(parseFloat($scope.input.gia))) {
                check = false;
                $scope.validate.gia = "kieeur so";
            } else if ($scope.input.gia < 100) {
                check = false;
                $scope.validate.gia = " > 100";
            }
        }
        if (!$scope.input || !$scope.input.hang) {
            check = false;
            $scope.validate.hang = "hang k dc de trong";
        }
        if (!$scope.input || !$scope.input.kich_thuoc) {
            check = false;
            $scope.validate.kich_thuoc = "kich_thuoc k dc de trong";
        }

        if (check) {
            let newAdd = {
                ten: $scope.input.ten,
                gia: $scope.input.gia,
                hang: $scope.input.hang,
                kich_thuoc: $scope.input.kich_thuoc
            }
            $http.post(apiUrl, newAdd).then(function (response) {
                if (response.status == 201) {
                    alert("theem thanh cong")
                    $location.path("/")
                }
            })
        }
    }
}