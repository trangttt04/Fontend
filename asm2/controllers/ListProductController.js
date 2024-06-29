window.ListProductController = function($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/products";
    $scope.getData = function(){
        $http.get(apiUrl).then(function(response){
        console.log(response)
        if(response.status == 200) {
            $scope.products = response.data
        }
        })
    }
    $scope.getData();
}