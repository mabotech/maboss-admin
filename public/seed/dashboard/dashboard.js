'use strict';

angular.module('maboApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', function($scope) {
    
    $scope.header = { name: 'header.html', url: '/common/partials/header.html'};
    
    $scope.left = { name: 'left.html', url: '/common/partials/left.html'};
    
    $scope.menu_items = [
    {"url":"#/dashboard", "name":"仪表板","icon":"dashboard"},
    {"url":"#/table", "name":"Table","icon":"table"},    
    {"url":"#/form", "name":"Form","icon":"bar-chart-o"},    
    ];

}]);