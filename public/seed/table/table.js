'use strict';

angular.module('maboApp.table', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/table', {
    templateUrl: 'table/table.html',
    controller: 'TableCtrl'
  });
}])

.controller('TableCtrl', ['$scope', function($scope) {
    
    $scope.header = { name: 'header.html', url: '/common/partials/header.html'};
    
    $scope.left = { name: 'left.html', url: '/common/partials/left.html'};
    
    $scope.menu_items = [
    {"url":"#/table", "name":"仪表板","icon":"dashboard"},
     {"url":"#/form", "name":"Form","icon":"bar-chart-o"},    
    ];

}]);