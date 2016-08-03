angular.module('tweetful', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController'
  })
  .otherwise('/');
}]);
