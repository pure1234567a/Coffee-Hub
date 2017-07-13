angular.module('overview.controller', [])
.controller('overviewCtrl', function($scope,$state) {
    $scope.gotoreceiptfromoverview = function() {
        $state.go ('app.receipt')
    }
})