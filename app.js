angular.module('tweetful', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController'
  })
  .when('/follows', {
    templateUrl: 'templates/follows.html',
    controller: 'FollowsController'
  })
  .when('/tweets', {
    templateUrl: 'templates/tweets.html',
    controller: 'TweetsController'
  })
  .when('/about', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController'
  })
  .when('/team', {
    templateUrl: 'templates/team.html',
    controller: 'TeamController'
  })
  .otherwise('/');
}])
