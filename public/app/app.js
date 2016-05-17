var app = angular.module('CommentApp', ['ui.router', 'satellizer'])
    .config(function($stateProvider, $urlRouterProvider, $authProvider,$provide) 
         {
 
        $authProvider.loginUrl = '/api/v1/authenticate';
 
        $urlRouterProvider.otherwise('/');
 
        $stateProvider
            .state('home', {
                url: '/',
                template: '<h1>Hello!</br> This is a live demo for CommentApp.</h1></br>Demo account: admin/admin</br>by Bartosz Zbisławski'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/app/partials/login.html',
                controller: 'AuthController'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/app/partials/register.html',
                controller: 'AuthController'
            })
            .state('user', {
                url: '/user',
                templateUrl: '/app/partials/user.html',
                controller: 'UserController'
            })
            .state('comment', {
                url: '/comment',
                templateUrl: '/app/partials/comment.html',
                controller: 'CommentController',
            })

            ;
 
        /*function redirectWhenLoggedOut($q, $injector) {
            return {
                responseError: function (rejection) {
                    var $state = $injector.get('$state');
                    var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];
 
                    angular.forEach(rejectionReasons, function (value, key) {
                        if (rejection.data.error === value) {
                            localStorage.removeItem('user');
                            $state.go('login');
                        }
                    });
 
                    return $q.reject(rejection);
                }
            }
        }
        app.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);*/
 
    });


