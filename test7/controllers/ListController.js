window.ListController = function ($scope, $http, $location) {
    var api = "http://localhost:3000/product";
    $scope.getData = function () {
        $http.get(api).then(function (response) {
            if (response.status = 200) {
                console.log(response);
                $scope.product = response.data;
            }
        })
    }
    $scope.getData();

    $scope.onDelete = function (id){
        $http.delete(`${api}/${id}`).then(function (response) {
            if (response.status == 200) {
                alert("xóa thành công");
                $scope.getData;
            }
        })
    }

    $scope.onEdit = function (id) {
        $location.path(`/edit/${id}`)
    }
    
    $scope.onDetail = function (id) {
        $location.path(`/detail/${id}`)
    }
}