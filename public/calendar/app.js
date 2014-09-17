'use strict';

// Declare app level module which depends on views, and components
angular.module('maboApp', [
  'ngRoute',
  'maboApp.kanban',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/calendar'});
}]);
