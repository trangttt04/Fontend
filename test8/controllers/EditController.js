window.EditController = function ($scope, $http, $routeParams, $location) {
    var api = "http://localhost:3000/category";
    var apiUrl = "http://localhost:3000/product";
    var id = $routeParams.id;

    $http.get(api).then(function (response) {
        $scope.category = response.data;
        console.log($scope.category);
    })

    $http.get(`${apiUrl}/${id}`).then(function (response) {
        $scope.input = {
            ten: response.data.ten,
            gia: response.data.gia,
            hang: response.data.hang,
            kich_thuoc: response.data.kich_thuoc
        }
    })

    $scope.onEdit = function () {
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
            $http.put(`${apiUrl}/${id}`, newAdd).then(function (response) {
                if (response.status == 200) {
                    alert("sua thanh cong")
                    $location.path("/")
                }
            })
        }
    }
}