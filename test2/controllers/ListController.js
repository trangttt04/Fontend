window.ListController = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/Tivi";
    $scope.getData = function () {
        $http.get(apiUrl).then(function (response) {
            console.log(response);
            if (response.status == 200) {
                $scope.Tivi = response.data;
                console.log($scope.Tivi);
            }
        })
    }
    $scope.getData();

    $scope.onDelete = function (id) {
        $http.delete(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                alert("Xóa thành công")
                $scope.getData; 
            }
        })
    }

    $scope.onDetail = function (id) {
        $location.path(`/detail/${id}`);
    }

    $scope.onEdit = function (id) {
        $location.path(`/edit/${id}`);
    }
}