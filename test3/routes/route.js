angular.module("myApp",["ngRoute"]).config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "views/list.html",
        controller: ListController
    })
    .when("/product/detail/:id",{
        templateUrl: "views/detail.html",
        controller: DetailController
    })
    .when("/product/add",{
        templateUrl: "views/add.html",
        controller: AddController
    })
    .when("/product/edit/:id",{
        templateUrl: "views/edit.html",
        controller: EditController
    })
})