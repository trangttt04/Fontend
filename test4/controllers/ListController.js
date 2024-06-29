window.ListController = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/BaiViet";
    $scope.getData = function () {
        $http.get(apiUrl).then(function (response) {
            // console.log(response);
            if (response.status == 200) {
                $scope.BaiViet = response.data;
            }
        })
    }
    $scope.getData();

    $scope.onDelete = function (id) {
        $http.delete(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                alert("xóa nha ? ");
                $scope.getData;
            }
        })
    }

    $scope.onDetail = function (id) {
        $location.path(`/detail/post/${id}`);
    }
    $scope.onEdit = function (id) {
        $location.path(`/edit/post/${id}`);

    }
}