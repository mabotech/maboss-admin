'use strict';

angular.module('maboApp.kanban', ['ngRoute', 'ui.sortable'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/kanban', {
    templateUrl: 'kanban/module.html',
    controller: 'KanbanCtrl'
  });
}])

.controller('KanbanCtrl', ['$scope', '$http', function($scope, $http) {
    
    $scope.header = { name: 'header.html', url: '/common/partials/header.html'};
    
    $scope.left = { name: 'left.html', url: '/common/partials/left.html'};
    
    $scope.menu_items = [
    {"url":"#/kanban", "name":"仪表板","icon":"table"},
    {"url":"#/table", "name":"Table","icon":"table"},    
    {"url":"#/form", "name":"Form","icon":"bar-chart-o"},    
    ];
    
 var tmpList = [];
  
  $scope.rawScreens = [
    [{
      icon: './img/icons/facebook.jpg',
      title: 'Facebook (a)',
      link: 'http://www.facebook.com'
    }, {
      icon: './img/icons/youtube.jpg',
      title: 'Youtube (a)',
      link: 'http://www.youtube.com'
    }, {
      icon: './img/icons/gmail.jpg',
      title: 'Gmail (a)',
      link: 'http://www.gmail.com'
    }, {
      icon: './img/icons/google+.jpg',
      title: 'Google+ (a)',
      link: 'http://plus.google.com'
    }, {
      icon: './img/icons/twitter.jpg',
      title: 'Twitter (a)',
      link: 'http://www.twitter.com'
    }, {
      icon: './img/icons/yahoomail.jpg',
      title: 'Yahoo Mail (a)',
      link: 'http://mail.yahoo.com'
    }, {
      icon: './img/icons/pinterest.jpg',
      title: 'Pinterest (a)',
      link: 'http://www.pinterest.com'
    }],
    [{
      icon: './img/icons/facebook.jpg',
      title: 'Facebook (b)',
      link: 'http://www.facebook.com'
    }, {
      icon: './img/icons/youtube.jpg',
      title: 'Youtube (b)',
      link: 'http://www.youtube.com'
    }, {
      icon: './img/icons/gmail.jpg',
      title: 'Gmail (b)',
      link: 'http://www.gmail.com'
    }, {
      icon: './img/icons/google+.jpg',
      title: 'Google+ (b)',
      link: 'http://plus.google.com'
    }, {
      icon: './img/icons/twitter.jpg',
      title: 'Twitter (b)',
      link: 'http://www.twitter.com'
    }, {
      icon: './img/icons/yahoomail.jpg',
      title: 'Yahoo Mail (b)',
      link: 'http://mail.yahoo.com'
    }, {
      icon: './img/icons/pinterest.jpg',
      title: 'Pinterest (b)',
      link: 'http://www.pinterest.com'
    }]
  ];
  
  $scope.list1 = $scope.rawScreens[0];
  $scope.list2 = $scope.rawScreens[1];
  
  
  $scope.sortingLog = [];
  
  $scope.sortableOptions = {
    placeholder: "card",
    connectWith: ".apps-container"
  };
  
  $scope.v = {"kanbans":{"设备名称":{"name":"设备名称","numberOfColumns":"6","columns":[{"name":"待排产","cards":[{"name":"r1","details":"eee","color":"FAFCD2"},{"name":"hh","details":"eeee","color":"FCC19D"},{"name":"yyy","details":"yyrr","color":"A2FCA3"}],"settings":{"color":"#CCC"}},{"name":"排产","cards":[],"settings":{"color":"hsv(0, 65%, 41%)"}},{"name":"准备","cards":[],"settings":{"color":"hsv(0, 33%, 88%)"}},{"name":"实验","cards":[],"settings":{"color":""}},{"name":"完成","cards":[],"settings":{"color":""}},{"name":"阻塞","cards":[],"settings":{"color":"hsv(0, 86%, 93%)"}}],"archived":[],"settings":{}}},"lastUsed":"设备名称","theme":"default-dark","lastUpdated":0};    
      
      $scope.kanban = $scope.v["kanbans"]["设备名称"]
  
  $scope.logModels = function () {
    $scope.sortingLog = [];
    for (var i = 0; i < $scope.rawScreens.length; i++) {
      var logEntry = $scope.rawScreens[i].map(function (x) {
        return x.title;
      }).join(', ');
      logEntry = 'container ' + (i+1) + ': ' + logEntry;
      $scope.sortingLog.push(logEntry);
    }
  };
        
        $http.get('kanban/data1.json').then(function(res) {
        
            $scope.data = res.data.measure;
    
        });
    

}]);