window.ProductListController = function($scope, $http, $location){
    // tao dg dan apiUrl de no goi dc API
    var apiUrl = "http://localhost:3000/product";
    $scope.getData = function(){
        // goi de lay data
        $http.get(apiUrl).then(function(respone){
            // console.log(respone)

            // neu nhu respone tra ve du lieu thanh cong
            if(respone.status == 200) {
                // tao ra 1 bien product de hung du lieu tu phia json-server tra ve
                $scope.product = respone.data
            }
        })
    }
    $scope.getData();

    // xoa san pham 
    $scope.onDelete = function(deleteID) {
        let conFirm = window.confirm("Xoa nhe");
        if(conFirm) {
            $http.delete(`${apiUrl}/${deleteID}`).then(
                function(respone) {
                    if(respone.status == 200) {
                        // goi lai ham get data de cap nhat lai bang
                        $scope.getData();
                    }
                }
            )
        }
    }

    $scope.onDetai = function(id){
        $location.path(`/product/detai/${id}`)
    }

    $scope.onEdit = function(id) {
        $location.path(`product/${id}/edit`)
    }
}