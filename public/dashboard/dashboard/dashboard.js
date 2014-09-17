'use strict';

angular.module('maboApp.dashboard', ['ngRoute', 'nvd3'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.header = { name: 'header.html', url: '/common/partials/header.html'};
    
    $scope.left = { name: 'left.html', url: '/common/partials/left.html'};
    
    $scope.menu_items = [
    {"url":"#/dashboard", "name":"仪表板","icon":"dashboard"},
    {"url":"#/table", "name":"Table","icon":"table"},    
    {"url":"#/form", "name":"Form","icon":"bar-chart-o"},    
    ];
    
    //
    var colors = ["#2ECC40","#0074D9","#FFDC00","#FF4136","#B10DC9","#AAAAAA","#deface"];
     $scope.options = {
            chart: {
                type: 'stackedAreaChart',
                height: 350,
                style:"expand", //  'stack', 'stream', 'stream-center', 'expand', 'stack_percent'
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 40
                },
                color:function(d, i){                    
                   return  colors[i % colors.length] ;                    
                },
                x: function(d){return d[0];},
                y: function(d){return d[1];},
                useVoronoi: false,
                clipEdge: true,
                transitionDuration: 500,
                useInteractiveGuideline: true,
                xAxis: {
                    showMaxMin: false,     
                    tickFormat: function(d) {
                        return d3.time.format('%m-%d %H:%M')(new Date(d))
                    }
                },
                yAxis: {
                    tickFormat: function(d){
                        return d3.format(',.2f')(d);
                    }
                }
            }
        };
        
        $http.get('dashboard/data1.json').then(function(res) {
        
            $scope.data = res.data.measure;
    
        });
    

}]);