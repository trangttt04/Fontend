window.ProductDetaiController = function ($scope,$http,$routeParams){
    var apiUrl = "http://localhost:3000/product";
    var id = $routeParams.id;
    $scope.getDetai = function () {
        $http.get(`${apiUrl}/${id}`)
        .then(function(respone){
            if(respone.status == 200) {
                $scope.p = respone.data;
            }
        })
    }
    $scope.getDetai();
}