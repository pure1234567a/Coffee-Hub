angular.module('home.controller', [])
    .controller('homeCtrl', function ($scope,$state) {

        $scope.clientHight = window.document.defaultView.innerHeight;
        $scope.styleObj = {
            'width': '100%',
            'height': $scope.clientHight - ($scope.clientHight / 2.5) + 'px'
        }
        $scope.gotocalculate = function(){
            $state.go('app.calculate')
        }
         $scope.gotoqrscan = function(){
            $state.go('app.qrscan')
        }
          $scope.gotobuycc = function(){
            $state.go('app.buycc')
        }
         $scope.gotosellcc = function(){
            $state.go('app.sellcc')
        }
    })