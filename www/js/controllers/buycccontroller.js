angular.module('buycc.controller', [])
.controller('buyccCtrl', function($scope,$state) {
    $scope.gotoqrscanfrombuycc = function(){
        $state.go('app.qrscan')
    }
})