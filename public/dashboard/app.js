'use strict';

// Declare app level module which depends on views, and components
angular.module('maboApp', [
  'ngRoute',
  'maboApp.dashboard',
   'maboApp.flot',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/flot'});
}]);
