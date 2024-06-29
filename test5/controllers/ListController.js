window.ListController = function ($scope, $http, $location) {
    var apiUrl = "http://localhost:3000/NhanVien";
    $scope.getData = function () {
        $http.get(apiUrl).then(function (response) {
            if (response.status == 200) {
                $scope.NhanVien = response.data;
            }
        })
    }
    $scope.getData();

    $scope.onDelete = function (id) {
        $http.delete(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                alert("Bạn có muốn xóa không ?");
                $scope.getData;
            }
        })
    }

    $scope.onDetail = function (id) {
        $location.path(`/detail/post/${id}`)
    }
    $scope.onEdit = function (id) {
        $location.path(`/edit/post/${id}`)
    }
}