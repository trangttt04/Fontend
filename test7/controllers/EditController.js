window.EditController = function ($scope, $http, $routeParams, $location) {
    var api = "http://localhost:3000/product";
    var apiUrl = "http://localhost:3000/Category";
    var id = $routeParams.id;

    $http.get(apiUrl).then(function (response) {
        $scope.Category = response.data;
    })

    $http.get(`${api}/${id}`).then(function (response) {
        $scope.input = {
            name: response.data.name,
            price: response.data.price,
            category: response.data.category,
            email: response.data.email,
            date : new Date(response.data.date)
        }
    })

    $scope.onEdit = function () {
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
            $http.put(`${api}/${id}`, newAdd).then(function (response) {
                if (response.status == 200) {
                    $location.path("/");
                }
            })
        }
    }

}