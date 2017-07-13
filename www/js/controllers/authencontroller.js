angular.module('authen.controller', [])
.controller('authenCtrl', function($scope,$state) {
    $scope.title = 'sign in Page';
    $scope.signindata = {
       username: '',
       password: ''
    };
    $scope.dosignin = function(signindata){

        
            if(signindata.username !== '' && signindata.password !== '' ){
                console.log('Username  ' + signindata.username +' : '+ 'Password  ' + signindata.password);
                $state.go('app.home');
            }
           
            else if(signindata.username !== ''){
                console.log('Password  ' + 'กรุณาใส่ password');
            }

            else if(signindata.password !== ''){
                console.log('Username  ' + 'กรุณาใส่ username');
            }
            else {  
                 console.log('Username  ' + 'กรุณาใส่ Username' + ' และ password' );
}    
}
     $scope.gotosigninwithqr = function(){
        $state.go('app.signinwithqr')
    }


})