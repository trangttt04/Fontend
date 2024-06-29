window.ListController = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/Tivi";
    $scope.getData = function () {
        $http.get(apiUrl).then(function (response) {
            if (response.status == 200) {
                $scope.Tivi = response.data;
            }
        })
    }
    $scope.getData();

    $scope.onEdit = function (id) {
        $location.path(`/edit/${id}`);
    }
    $scope.onDetail = function (id) {
        $location.path(`/detail/${id}`);
    }
}