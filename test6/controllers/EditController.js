window.EditController = function ($scope, $http, $routeParams, $location) {
    var api = "http://localhost:3000/Hang";
    var apiUrl = "http://localhost:3000/Tivi";
    var id = $routeParams.id;


    $http.get(api).then(function (response) {
        $scope.Hang = response.data;
    })

    $http.get(`${apiUrl}/${id}`).then(function (response) {
        $scope.Tivi = response.data;
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
            kich_thuoc: ""
        }

        if (!$scope.input || !$scope.input.ten) {
            check = false;
            $scope.validate.ten = "Tên k đc để trống";
        }

        if (!$scope.input || !$scope.input.gia) {
            check = false;
            $scope.validate.gia = "Giá k đc để trống";
        } else {
            if (isNaN($scope.input.gia)) {
                 check = false;
                 $scope.validate.gia = "Giá phải là kiểu số";
            } else if ($scope.input.gia < 100) {
                check = false;
                $scope.validate.gia = "Giá lớn hơn 100";
            }
        }

        if (!$scope.input || !$scope.input.hang) {
            check = false;
            $scope.validate.hang = "Hãng k đc để trống";
        }

        if (!$scope.input || !$scope.input.kich_thuoc) {
            check = false;
            $scope.validate.kich_thuoc = "Kích thước k đc để trống";
        }

        if (check) {
            let newAdd = {
                ten: $scope.input.ten,
                gia: $scope.input.gia,
                hang: $scope.input.hang,
                kich_thuoc: $scope.input.kich_thuoc,
            }
            $http.put(`${apiUrl}/${id}`, newAdd).then(function (response) {
                if (response.status == 200) {
                    $location.path("/")
                }
            })
        }
    }

}