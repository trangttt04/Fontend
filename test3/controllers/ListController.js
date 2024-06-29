window.ListController = function($scope, $http, $location){
    var api = "http://localhost:3000/products";

    $scope.getData = function(){
        $http.get(api).then(function(response){
            if(response.status == 200){
                $scope.products = response.data;
                // console.log($scope.products);
            }
        })
    }
    $scope.getData();

    $scope.onDelete = function(id){
        $http.delete(`${api}/${id}`).then(function(response){
            if(response.status == 200){
                $scope.getData;
                alert("xoa nhe ?");
            }
        })
    }

    $scope.onDetail = function(id){
        $location.path(`/product/detail/${id}`);
    }
    $scope.onEdit = function(id){
        $location.path(`/product/edit/${id}`);
    }
}