'use strict';

// Declare app level module which depends on views, and components
angular.module('maboApp', [
  'ngRoute',
  'maboApp.kanban',
  'maboApp.table',
  'maboApp.form',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/kanban'});
}]);
