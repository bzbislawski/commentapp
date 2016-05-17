app.controller('UserController',  function($state,$http,$rootScope, $scope,$auth, userService) {
 
    //$scope.user=[];
 
    $scope.init = function (){
  
        $http.get('/api/v1/authenticate/user').success(function(data){
            $scope.user=data.user;
        })
    };


  $scope.init();
 
});