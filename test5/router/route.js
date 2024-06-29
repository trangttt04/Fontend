angular.module("myApp", ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/list.html",
        controller: ListController
    })
    .when("/detail/post/:id", {
        templateUrl: "views/detail.html",
        controller: DetailController
    })
    .when("/post/add", {
        templateUrl: "views/add.html",
        controller: AddController
    })
    .when("/edit/post/:id", {
        templateUrl: "views/edit.html",
        controller: EditController
    })
})