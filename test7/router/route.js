angular.module("myApp", ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/list.html",
        controller: ListController
    })
    .when("/add", {
        templateUrl: "views/add.html",
        controller: AddController
    })
    .when("/edit/:id", {
        templateUrl: "views/edit.html",
        controller: EditController
    })
    .when("/detail/:id", {
        templateUrl: "views/detail.html",
        controller: DetailController
    })
})