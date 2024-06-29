window.DetailController = function ($scope, $http, $routeParams) {
    var apiUrl = "http://localhost:3000/BaiViet";
    var id = $routeParams.id;
    $scope.getDetail = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            // console.log(response);
            $scope.BaiViet = response.data;
            // console.log();
        })
    }
    $scope.getDetail();
}