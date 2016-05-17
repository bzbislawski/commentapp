app.service('authService', function($http) {  
   return {
      
    get : function() {
        return $http.get('/api/v1/authenticate/user');
    }

   };
});

/*

get : function() {
        return $http.get('/api/v1/authenticate/user').then(function(response) {
                return response.data;
            });;
    }
*/