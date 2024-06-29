angular.module("myApp",["ngRoute"])
.config(function($routeProvider){
    $routeProvider.when("/products/list",{
        templateUrl: "views/list.html",
        controller: ListProductController
    })
    .when("/products/add",{
        templateUrl: "views/add.html",
        controler: AddProductController
    })
})
