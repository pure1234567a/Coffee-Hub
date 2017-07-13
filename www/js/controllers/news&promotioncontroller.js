angular.module('news&promotion.controller', [])
.controller('news&promotionCtrl', function($scope,$state) {
   $scope.gotonews = function(){
        $state.go('app.news');
    }

     $scope.gotopromotion = function(){
        $state.go('app.promotion');
    }


})