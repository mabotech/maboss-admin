'use strict';

angular.module('maboApp.kanban', ['ngRoute', 'ui.calendar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/calendar', {
    templateUrl: 'kanban/calendar.html',
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
    
    $scope.uiConfig = {
      calendar:{
        height: 550,
        editable: true,
        defaultView: 'agendaWeek',
        selectable: true,
        header:{
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
         select: function(start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                $scope.$apply(function(){
                    $scope.eventSources.push({
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    });
                });

            }
        }
      }
    };
    
    $scope.eventSources = [];
    
        $http.get('kanban/data1.json').then(function(res) {
        
          //  $scope.data = res.data.measure;
    
        });
    

}]);