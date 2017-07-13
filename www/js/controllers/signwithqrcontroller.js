angular.module('signinwithqr.controller', [])
.controller('signinwithqrCtrl', function($scope,$state) {
    $scope.gotohomefromesigninwithqr = function(){
        $state.go('app.home')
    }
})