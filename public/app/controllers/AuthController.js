app.controller('AuthController',  function($auth, $state,$http,$rootScope, $scope, authService, navService) {
 
    $scope.email='';
    $scope.password='';
    $scope.newUser={};
    $scope.loginError=false;
    $scope.loginErrorText='';
 
        $scope.login = function() {
 
            var credentials = {
                email: $scope.email,
                password: $scope.password
            }
 
            $auth.login(credentials).then(function() {
 
                return $http.get('api/v1/authenticate/user');
 
            }, function(error) {
                $scope.loginError = true;
                $scope.loginErrorText = error.data.error;
                swal("Error!", "Unauthorized credentials!", "error")
 
            }).then(function(response) {
                $rootScope.currentUser = response.data.user;
                $scope.loginError = false;
                $scope.loginErrorText = '';

                authService.get().success(function(response) {
                    navService.user.data = response.user;
                });

                $state.go('user');
            });
        }
 
        $scope.register = function () {
 
            $http.post('/api/v1/register',$scope.newUser)
                .success(function(data){
                    $scope.email=$scope.newUser.email;
                    $scope.password=$scope.newUser.password;
                    $scope.login();
            }).error(function(){
                swal("Error!", "E-mail address must be unique.", "error")
            })
 
        };
 
 
});
 