window.DetailController = function ($scope, $http, $routeParams, $location) {
    var api = "http://localhost:3000/product";
    var apiUrl = "http://localhost:3000/Category";
    var id = $routeParams.id;

    $http.get(apiUrl).then(function (response) {
        $scope.Category = response.data;
    })

    $http.get(`${api}/${id}`).then(function (response) {
        $scope.input = {
            name: response.data.name,
            price: response.data.price,
            category: response.data.category,
            email: response.data.email,
            date : new Date(response.data.date)
        }
    })
}