console.log("abc");
window.AddController = function ($scope, $http, $location) {
    var api = "http://localhost:3000/Hang";
    var apiUrl = "http://localhost:3000/Tivi";

        $http.get(api).then(function (response) {
            $scope.Hang = response.data;
        })
    
    $scope.onAdd = function () {
        let check = true;
        $scope.validate = {
            ten: "",
            hang: "",
            kich_thuoc: "",
            gia: "",
        }
        if (!$scope.input || !$scope.input.ten) {
            check = false;
            $scope.validate.ten = "Tên k đc để trống";
        }

        if (!$scope.input || !$scope.input.hang) {
            check = false;
            $scope.validate.hang = "Hãng k đc để trống";
        }

        if (!$scope.input || !$scope.input.kich_thuoc) {
            check = false;
            $scope.validate.kich_thuoc = "Kích thước k đc để trống";
        }

        if (!$scope.input || !$scope.input.gia) {
            check = false;
            $scope.validate.gia = "Giá k đc để trống";
        } else if (isNaN(parseFloat($scope.input.gia))) {
            check = false;
            $scope.validate.gia = "Giá phải là kiểu số ";
        } else if ($scope.input.gia < 100) {
            check = false;
            $scope.validate.gia = "Giá phải lớn hơn 100";
        }

        if (check) {
            let newAdd = {
                ten: $scope.input.ten,
                hang: $scope.input.hang,
                kich_thuoc: $scope.input.kich_thuoc,
                gia: $scope.input.gia,
            }
            $http.post(apiUrl, newAdd).then(function (response) {
                if (response.status == 201) {
                    alert("Thêm mới thành công");
                    $location.path("/");
                }
            })
        }
    }
   
}