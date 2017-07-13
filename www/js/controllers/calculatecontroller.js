angular.module('calculate.controller', [])
    .controller('calculateCtrl', function ($scope,$state) {
       $scope.add = function(value) {
        if($scope.expression === "" || $scope.expression === undefined) {
            $scope.expression = value;
        } else {
            $scope.expression = $scope.expression + value;
        }
    }
        $scope.gotoreceiptfromcalculate = function(){
            $state.go('app.receipt')
        }
        $scope.gotoqrscanfromcalculate = function(){
        $state.go('app.qrscan')
    }
    })