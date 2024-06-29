window.DetailController = function ($scope, $http, $routeParams, $location) {
    var apiUrl = "http://localhost:3000/NhanVien";
    var id = $routeParams.id;

    $scope.getData = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            $scope.NhanVien = response.data;
            console.log($scope.NhanVien);
            
        })
    }
    $scope.getData();
}