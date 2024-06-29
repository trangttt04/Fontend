window.DetailController = function ($scope, $http, $routeParams, $location) {
    var apiUrl = "http://localhost:3000/Tivi";
    var id = $routeParams.id;
    $scope.getData = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                $scope.Tivi = response.data;
               
                $scope.input = {
                    ten: response.data.ten,
                    hang: response.data.hang,
                    kich_thuoc: response.data.kich_thuoc,
                    gia: response.data.gia
                }
            }
        })
    }
    $scope.getData();
}