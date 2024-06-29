// muốn sử dụng route trong angular js phải sử dụng đoạn code sau
angular.module('appRoute',['ngRoute'])
.config(function($routeProvider){
    $routeProvider.when('/trangChu',{
        templateUrl : 'views/trang-chu.html',
    })
    .when('/danhMuc',{
        templateUrl : 'views/danh-muc.html',
    })
});