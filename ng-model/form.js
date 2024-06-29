var app = angular.module("myApp",[]);
app.controller("infoController", function($scope){
    // $scope.test = "";

    // $scope.submit = function() {
    //     console.log($scope.input);
    // }
    $scope.input = {
        danhSach : {
            All : false,
            B : false,
            C : false,
            D : false,
            E : false,
        }
    }

    $scope.onClick = function() { 
        console.log(danhSach);
        
    }
})