// console.log("haha");
window.AddController = function ($scope, $http, $location) {
    var api = "http://localhost:3000/theLoai";
    var apiUrl = "http://localhost:3000/BaiViet";

    $scope.theLoai = [];
    $http.get(api).then(function (response) {
        $scope.theLoai = response.data;
    })

    $scope.onAdd = function () {
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
            let newAdd = {
                tieu_de: $scope.input.tieu_de,
                noi_dung: $scope.input.noi_dung,
                tac_gia: $scope.input.tac_gia,
                the_loai: $scope.input.the_loai,
                ngay_dang: formatDate
            }
            $http.post(apiUrl, newAdd).then(function (response) {
                if (response.status == 201) {
                    $location.path("/");
                }
            })
        }
    }
}