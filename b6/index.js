var myApp = angular.module("myApp", []);
// myApp.controller("myController1", ($scope, $rootScope) => {
//   $scope.mess = "Hello";
//   $rootScope.content = "uyen ne";
// });
// myApp.controller("myController2", ($scope, $rootScope) => {
//   $scope.mess = "Hello 2";
// });
// myApp.controller("parent", ($scope) => {
//   $scope.content = "Hello hii";
// });

myApp.controller("nhap", function ($scope, $rootScope) {
    $rootScope.listUser = [];

    $scope.them = function () {
      $rootScope.listUser = $rootScope.listUser;
      $rootScope.listUser.push({
        hoten: $scope.user.hoten,
        diachi: $scope.user.diachi,
        nganh: $scope.user.nganh,
      });
      $scope.user = {};
    };
  });
  
  myApp.controller("in", function ($scope, $rootScope) {
    $rootScope.listUser = [];
    $scope.xoa = function (index){
        let check = confirm("xóa nhé")
        if(check){
            $scope.listUser.splice(index, 1);
        }
          
        
    }
  });


// myApp.controller("nhap", ($scope, $rootScope) => {
//   $scope.user = {
//     hoten: "",
//     diachi: "",
//     nganh: "",
//   };

//   $scope.them = function () {
//     $rootScope.user = $scope.user;
//   };
// });
// myApp.controller("in", ($scope) => {
//   $scope.user = {};
// });


