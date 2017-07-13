angular.module('receipt.controller', [])
.controller('receiptCtrl', function($scope,$state) {
   $scope.gotohome = function(){
       $state.go('app.home')
   }
})