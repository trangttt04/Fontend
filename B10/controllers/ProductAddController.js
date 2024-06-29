window.ProductAddController = function($scope, $http, $location){
    var apiUrl = "http://localhost:3000/product";
    // ktra du lieu co hop le hay k
    $scope.kiemTraDuLieu = {
        name: false,
        price: false,
    }

    $scope.onSubmit = function(){
        // gan 1 biens de ktra loi neu nhu 1 trong 2 trg loi thi chuyen thanh true
        let flag = false;
        if(!$scope.inputValue || !$scope.inputValue.name){
            // neu nhu k co inputValue hoac inputValue.name
            $scope.kiemTraDuLieu.name = true;
            flag = true;
        }

        if(!$scope.inputValue || !$scope.inputValue.price){
            // neu nhu k co inputValue hoac inputValue.name
            $scope.kiemTraDuLieu.price = true;
            flag = true;
        }

        if(!flag){
            // tao ra doi tuong item moi de them vao
            var newItem = {
                ...$scope.inputValue,
            }
            // them du lieu moi thi phai su dung phuong thuc post
            $http.post(
                apiUrl,
                newItem
            ).then(function(respone){
                // 201 la quy dinh angular js
                // list la 200. add la 201
                if(respone.status == 201){
                    $location.path('product/list')
                }
            })
        }
    }
}