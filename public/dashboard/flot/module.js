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
    
   
    
    
    var markings = [
			{ color: "#f6f6f6", yaxis: { from: 11.2 } },
			{ color: "#f6f6f6", yaxis: { to: -11.2 } },
			{ color: "#ccc", lineWidth: 1, xaxis: { from:(new Date(2014, 8, 19, 18,0,0)).getTime(),  to:(new Date(2014, 8, 19, 20,0,0)).getTime()  }},
		//	{ color: "#000", lineWidth: 1, xaxis: { from: 8, to: 8 } }
		];
            
    var dv = {
        series: {
            stack: 1,
       // bars: { show: true, barWidth:600 *60*60},
        lines: { show: true , fill: true},
        points: { show: true }
        },
        selection: {
				mode: "xy"
			},
        xaxis:{
            mode:"time",
             timeformat: "%m-%d %H:%M",
            min: (new Date(2014, 8, 19)).getTime(),
           // max: (new Date(2014, 8, 21)).getTime(),
        },
        zoom: {
				interactive: true
			},
			pan: {
		//		interactive: true
			},
        grid: {
				hoverable: true,
				clickable: true,
            markings: markings
			},
        
        legend: {
            show: true,
            position:"ne",
            margin:10
        }
    };

    for (var i = 0; i < 28; i += 0.5) {
        var v = [i, Math.sin(i)];
        //console.log(v);
     //   $scope.dataset[0].data.push([1411110000000+i*3600000, Math.sin(i)]);
       //$scope.dataset[1].data.push([1411110000000+i*3300000, Math.cos(i)]);    
        }
     $scope.options  = dv;
    
    
          
    $http.get('flot/data3.json').then(function(res) {
        
       
         $scope.dataset = [{ data: [], yaxis: 1, label: "sin(x)" },{ data: [], yaxis: 1,label: "cos(x)" }];
         
         $scope.dataset[0].data  = res.data.measure[0]["values"];
         $scope.dataset[1].data  = res.data.measure[1]["values"];
        
        //$scope.dataset
     //   console.log($scope.dataset);
      //  $scope.options  = dv;
    //   $scope.$apply();
     //  $scope.emit("dataset") 
    });
    

}]);