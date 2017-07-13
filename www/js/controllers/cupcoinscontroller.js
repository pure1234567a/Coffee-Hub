angular.module('cupcoins.controller', [])
.controller('cupcoinsCtrl', function($scope,$state) {
   $scope.gotoreceiptfromoverviewinCC = function() {
        $state.go ('app.receipt')
    }
    $scope.addtobuycc = function(value) {
        if($scope.expression === "" || $scope.expression === undefined) {
            $scope.expression = value;
        } else {
            $scope.expression = $scope.expression + value;
        }
    }
     $scope.gotoscanqrformtopupinCC = function() {
        $state.go ('app.qrscan')
    }
})