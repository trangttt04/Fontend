window.DetailController = function($scope, $http, $routeParams){
    var api = "http://localhost:3000/products";
    var id = $routeParams.id;

    $scope.getData = function(){
        $http.get(`${api}/${id}`).then(function(response){
            if(response.status == 200){
                $scope.products = response.data;
                console.log($scope.products);
            }
        })
    }
    $scope.getData();
}