window.DetailController = function ($scope, $http, $routeParams, $location) {
    var api = "http://localhost:3000/Tivi";
    var apiUrl = "http://localhost:3000/Hang";
    var id = $routeParams.id;

    $http.get(apiUrl).then(function (response) {
        $scope.Hang = response.data;
    })
    $scope.getData = function () {
        $http.get(`${api}/${id}`).then(function (response) {
            $scope.input = {
                ten: response.data.ten,
                gia: response.data.gia,
                hang: response.data.hang,
                kich_thuoc: response.data.kich_thuoc
            }
        })
    }
    $scope.getData();
}