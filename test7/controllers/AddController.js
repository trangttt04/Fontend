window.AddController = function ($scope, $http, $location) {
    var api = "http://localhost:3000/product";
    var apiUrl = "http://localhost:3000/Category";

    $http.get(apiUrl).then(function (response) {
        $scope.Category = response.data;
    })

    $scope.onAdd = function () {
        let check = true;
        $scope.validate = {
            name: "",
            price: "",
            category: "",
            email: "",
            date: "",
        }
        if (!$scope.input || !$scope.input.name) {
            check = false;
            $scope.validate.name = "Tên không đc để trống";
        }
        if (!$scope.input || !$scope.input.price) {
            check = false;
            $scope.validate.price = "Giá không đc để trống";
        } else {
            if (isNaN(parseFloat($scope.input.price))) {
                check = false;
                $scope.validate.price = "Giá phải là kiểu số";
            } else if ($scope.input.price > 200) {
                check = false;
                $scope.validate.price = "Giá phải > 200";
            }
        } 
        if (!$scope.input || !$scope.input.category) {
            check = false;
            $scope.validate.category = "Danh mục không đc để trống";
        }
        if (!$scope.input || !$scope.input.email) {
            check = false;
            $scope.validate.email = "email không đc để trống";
        }
        if (!$scope.input || !$scope.input.date) {
            check = false;
            $scope.validate.date = "Ngày không đc để trống";
        } else {
            let currentDate = new Date();
            let inputDate = new Date($scope.input.date)
            if (inputDate > currentDate) {
                 check = false;
                 $scope.validate.date = "Ngày không đc lớn hơn hiện tại";
            }
        }

        if (check) {
            let formatDate = $scope.input.date.toISOString().split("T")[0];
            let newAdd = {
                name: $scope.input.name,
                price: $scope.input.price,
                category: $scope.input.category,
                email: $scope.input.email,
                date: formatDate
            }
            $http.post(api, newAdd).then(function (response) {
                if (response.status == 201) {
                    $location.path("/");
                }
            })
        }
    }

}