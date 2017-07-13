angular.module('qr.controller', [])
.controller('qrscanCtrl', function($scope,$state) {
    $scope.gotoreceipt = function(){
        $state.go('app.receipt')
    }
})