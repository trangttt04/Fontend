    // var myApp = angular.module('myApp',[]);
    // myApp.controller('infoController', function($scope){
    //     $scope.welcome =  "Trang Cute";
    // })



// cach 1:
    // function myFunc($scope) { // luôn có tham số là scope
    //     $scope.hoTen = "Trang cute";
    //     $scope.tuoi = "19";
    //     // đằng sau scope là biến mình khởi tạo để render ra view
    // }
    // // khai báo angular js cùng với vùng mà mình sử dụng
    // var App = angular.module('myApp',[]);
    // // map hàm myFunc với vùng infoController để render dữ liệu ra
    // App.controller('infoController', myFunc);


// cach 2:
// khai báo angular js cùng với vùng mà mình sử dụng
var App = angular.module('myApp',[]);
// map hàm myFunc với vùng infoController để render dữ liệu ra
App.controller('infoController', function($scope){
    // $scope.hoTen = "Trang cute";
    // $scope.tuoi = "19";

    // viêt dạng dối tượng
// $scope.sinhVien = { 
//     maSV: "PH36617",
//     tenSV: "trang ttt",
//     namSinh: 2004,

// }
// $scope.namHienTai = 2024;


// mảng đối tượng
$scope.sinhVien = [
    {
        maSV: "ph36617",
        tenSV: "Nguyễn Văn A",
        namSinh: 2004
    },
    {
        maSV: "ph36618",
        tenSV: "Nguyễn Văn B",
        namSinh: 2003
    },
]
});



