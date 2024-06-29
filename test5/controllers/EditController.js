window.EditController = function ($scope,$http, $routeParams, $location) {
    var api = "http://localhost:3000/ChucVu";
    var apiUrl = "http://localhost:3000/NhanVien";

    $http.get(api).then(function (response) {
        $scope.ChucVu = response.data;
    })

    var id = $routeParams.id;
    $scope.getData = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                $scope.NhanVien = response.data;
                console.log($scope.NhanVien);
                $scope.input = {
                    ho_ten: response.data.ho_ten,
                    sdt: response.data.sdt,
                    email: response.data.email,
                    chuc_vu: response.data.chuc_vu,
                    ngay_sinh: new Date(response.data.ngay_sinh)
                }
            }
        })
    }
    $scope.getData();

    $scope.onEdit = function () {
        let check = true;
        $scope.validate = {
            ho_ten : "",
            sdt: "",
            email: "",
            chuc_vu: "",
            ngay_sinh : "",
        }

        if (!$scope.input || !$scope.input.ho_ten) {
            check = false;
            $scope.validate.ho_ten = "Họ và tên không được để trống";
        }
        if (!$scope.input || !$scope.input.sdt) {
            check = false;
            $scope.validate.sdt = "Số điện thoại không được để trống";
        } else if (isNaN(parseFloat($scope.input.sdt))) {
            check = false;
            $scope.validate.sdt = "Số điện thoại phải là kiểu số";
        }
        if (!$scope.input || !$scope.input.email) {
            check = false;
            $scope.validate.email = "Email không được để trống";
        }
        if (!$scope.input || !$scope.input.chuc_vu) {
            check = false;
            $scope.validate.chuc_vu = "Chức không được để trống";
        }
        if (!$scope.input || !$scope.input.ngay_sinh) {
            check = false;
            $scope.validate.ngay_sinh = "Họ và tên không được để trống";
        } else {
            let currentDate = new Date();
            let inputDate = new Date($scope.input.ngay_sinh);
            if (inputDate > currentDate) {
                check = false;
                $scope.validate.ngay_sinh = "Ngày sinh phải nhỏ hơn ngày hiện tại";
            }
        }

        if (check) {
            let formartDate = $scope.input.ngay_sinh.toISOString().split("T")[0];
            let newAdd = {
                ho_ten: $scope.input.ho_ten,
                sdt: $scope.input.sdt,
                email: $scope.input.email,
                chuc_vu: $scope.input.chuc_vu,
                ngay_sinh: formartDate
            }
            $http.put(`${apiUrl}/${id}`, newAdd).then(function (response) {
                    if (response.status == 200) {
                        alert("Sửa thành công");
                        $location.path("/");
                }
            })
        }
    }
}