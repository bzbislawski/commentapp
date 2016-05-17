app.controller('NavController', function($auth, $state,$http,$rootScope, $scope, authService, userService, navService) { 
	$scope.user = navService.user;


	authService.get().success(function(response) {
		$scope.guest = response.user;
        $scope.user.data = response.user;
        navService.user.data = response.user
    });
	

	$scope.logout = function() {
		userService.logout();
		$rootScope.currentUser = null;
	    $scope.user.data = {};
	    //console.log($scope.user);
	    console.log("logging out");
	    $state.go('home');
	}


});

