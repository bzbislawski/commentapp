angular.module('commentService', [])
.factory('Comment', function($http) {

    return {
        // get all the comments
        get : function() {
            return $http.get('/api/v1/comments');
        },

        // save a comment (pass in comment data)
        save : function(commentData) {
            return $http({
                method: 'POST',
                url: '/api/v1/comments',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(commentData)
            });
        },

        // destroy a comment
        destroy : function(id) {
            return $http.delete('/api/v1/comments/' + id);
        }
    }

});