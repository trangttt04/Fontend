window.ListController = function ($scope, $http, $location) {
    var api = "http://localhost:3000/product";
    $scope.getData = function () {
        $http.get(api).then(function (response) {
            if (response.status == 200) {
                $scope.product = response.data;
            }
        })
    }
    $scope.getData();

    $scope.onEdit = function (id) {
        $location.path(`/edit/${id}`)
    }
}