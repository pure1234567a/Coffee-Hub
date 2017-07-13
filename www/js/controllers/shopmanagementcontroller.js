angular.module('shopmanagement.controller', [])
.controller('shopmanagementCtrl', function($scope,$state) {
   $scope.gotoaddmenu = function(){
       $state.go('app.addmenu')
   }
})