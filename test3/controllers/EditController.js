window.EditController = function($scope, $http, $routeParams, $location){
    var api = "http://localhost:3000/products";
    var apiUrl = "http://localhost:3000/categories";

    $scope.categories = [];
    $http.get(apiUrl).then(function(response){
        $scope.categories = response.data;
    })

    var id = $routeParams.id;
    $scope.getProduct = function(){
        $http.get(`${api}/${id}`).then(function(response){
            console.log(response);
            if(response.status == 200){
                $scope.products = response.data;
                
                $scope.input = {
                    ma: response.data.ma,
                    ten: response.data.ten,
                    loai: response.data.loai,
                    gia: response.data.gia
                }
            }
        })
    }
    $scope.getProduct();

    $scope.onEdit = function() {
        let check = true;
        $scope.validate = {
            ma: "",
            ten: "",
            loai: "",
            gia: "",
        }
        if(!$scope.input || !$scope.input.ma){
            check = false;
            $scope.validate.ma = "ma k dc de trong";
        }

        if(!$scope.input || !$scope.input.ten){
            check = false;
            $scope.validate.ten = "Ten k dc de trong";
        }

        if(!$scope.input || !$scope.input.loai){
            check = false;
            $scope.validate.loai = "Loai k dc de trong";
        }

        if(!$scope.input || !$scope.input.gia){
            check = false;
            $scope.validate.gia = "Gia k dc de trong";
        } else if(!$scope.input || isNaN(parseFloat($scope.input.gia))){
            check = false;
            $scope.validate.gia = "Gia phai la so";
        }

        if(check){
            let newUpdate = {
                ma: $scope.input.ma,
                ten: $scope.input.ten,
                loai: $scope.input.loai,
                gia: $scope.input.gia
            }
            $http.put(`${api}/${id}`, newUpdate).then(function(response){
                if(response.status == 200){
                    alert("cap nhat thang cong");
                    $location.path("/");
                }
            })
        }
    }
}