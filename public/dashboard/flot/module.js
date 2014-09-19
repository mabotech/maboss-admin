'use strict';

angular.module('maboApp.flot', ['ngRoute', 'angular-flot'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/flot', {
    templateUrl: 'flot/module.html',
    controller: 'FlotCtrl'
  });
}])

.controller('FlotCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.header = { name: 'header.html', url: '/common/partials/header.html'};
    
    $scope.left = { name: 'left.html', url: '/common/partials/left.html'};
    
    $scope.menu_items = [
    {"url":"#/flot", "name":"仪表板","icon":"flot"},
    {"url":"#/table", "name":"Table","icon":"table"},    
    {"url":"#/form", "name":"Form","icon":"bar-chart-o"},    
    ];
    
    //
    var colors = ["#2ECC40","#0074D9","#FFDC00","#FF4136","#B10DC9","#AAAAAA","#deface"];
    
    $scope.dataset = [{ data: [], yaxis: 1 }];
    
    $scope.options = {
    legend: {
      show: true,
        position:"ne"
    }
    };

    for (var i = 0; i < 14; i += 0.5) {
        $scope.dataset[0].data.push([i, Math.sin(i)]);
    }

    $http.get('flot/data1.json').then(function(res) {
    
        //$scope.data = res.data.measure;

    });
    

}]);