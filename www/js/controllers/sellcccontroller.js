angular.module('sellcc.controller', [])
.controller('sellccCtrl', function($scope,$state) {
    $scope.gotoqrscanfromsellcc = function(){
        $state.go('app.qrscan')
    }
})