app.controller('CommentController',  function($state,$http,$rootScope, $scope,$auth) {
 
    $scope.comment={};
 
    $scope.get = function (){
        $http.get('/api/v1/comments').success(function(data){
            $scope.comments=data;
        })
    };

    $scope.submit = function (){
        var comment = $scope.comment;

        $http({
          method  : 'POST',
          url     : '/api/v1/comments',
          data    :  $.param(comment), //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
        })
          .success(function(data) {
            $scope.get();
            swal("Success!", "Your comment has been added!", "success");
            $scope.comment = "";
          })
          .error(function()
            {
                swal("Authorization error!", "Log in first to add a comment", "error"); 
            });
    };

    $scope.delete = function (data){
        swal({   
            title: "Are you sure?",   
            text: "You will not be able to recover this imaginary file!",   
            type: "warning",   
            showCancelButton: true,   
            confirmButtonColor: "#DD6B55",   
            confirmButtonText: "Yes, delete it!",   
            closeOnConfirm: false 
        }, function(){ 
            $http.delete('/api/v1/comments/' + data.id)
            .success(function(data) {
                $scope.get();
                swal("Deleted!", "Your comment has been deleted.", "success"); 
            })
            .error(function(data){
                swal("Error!", "Unauthorized action!", "error");
            });
        });
    };

    
    $scope.get();
});

