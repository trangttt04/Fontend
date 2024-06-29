// console.log("haha");
window.EditController = function ($scope, $http, $routeParams, $location) {
    var api = "http://localhost:3000/theLoai";
    var apiUrl = "http://localhost:3000/BaiViet";

    var id = $routeParams.id;

    $scope.theLoai = [];
    $http.get(api).then(function (response) {
        $scope.theLoai = response.data;
    })

    $scope.getEdit = function () {
        $http.get(`${apiUrl}/${id}`).then(function (response) {
            if (response.status == 200) {
                // let formatDate = 
                $scope.BaiViet = response.data;
                $scope.input = {
                    tieu_de: response.data.tieu_de,
                    noi_dung: response.data.noi_dung,
                    tac_gia: response.data.tac_gia,
                    the_loai: response.data.the_loai,
                    ngay_dang: new Date(response.data.ngay_dang)
                }
            }
        })
    }
    $scope.getEdit();

    $scope.onEdit = function () {
        let check = true

        $scope.validate = {
            tieu_de: "",
            noi_dung: "",
            tac_gia: "",
            the_loai: "",
            ngay_dang: "",
        }

        if (!$scope.input || !$scope.input.tieu_de) {
            check= false
            $scope.validate.tieu_de = "Tiêu đề k đc để trống";
        }

        if (!$scope.input || !$scope.input.noi_dung) {
            check = false;
            $scope.validate.noi_dung = "Nội dung không được để trống"
        }

        if (!$scope.input || !$scope.input.tac_gia) {
            check = false;
            $scope.validate.tac_gia = "Tác giả không được để trống"
        }

        if (!$scope.input || !$scope.input.the_loai) {
            check = false;
            $scope.validate.the_loai = "Thể loại không được để trông"
        }

        if (!$scope.input || !$scope.input.ngay_dang) {
            check = false;
            $scope.validate.ngay_dang = "Ngày không được để trống";
        } else {
            let currentDate = new Date();
            let inputDate = new Date($scope.input.ngay_dang);
            if (inputDate > currentDate) {
            check = false;
            $scope.validate.ngay_dang = "Ngày không được lớn hơn ngày hiện tại";
        }
        } 

        if (check) {
            
            let formatDate = $scope.input.ngay_dang.toISOString().split("T")[0];
            let update = {
                tieu_de: $scope.input.tieu_de,
                noi_dung: $scope.input.noi_dung,
                tac_gia: $scope.input.tac_gia,
                the_loai: $scope.input.the_loai,
                ngay_dang: formatDate
            }
            $http.put(`${apiUrl}/${id}`, update).then(function (response) {
                if (response.status == 200) {
                    $location.path("/");
                }
            })
        }
    }
}