app.service('userService', function ($auth) {
   
    this.user = {};

    return {
        logout : function() {
        	$auth.logout();
        }
    }    
});