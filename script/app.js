var myApp = angular.module('myApp',['ngMessages','ngRoute']); //dependency modules

myApp.config(function($routeProvider,$locationProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }).when ('/statistics', {
        templateUrl: 'pages/statistics.html',
        controller: 'statisticsController',
        resolve: {//wait to load state data before controller
            statesData: function($http){ 
                return $http.get('http://pos.idtretailsolutions.com/countytest/states');
            }
        }
    });
});

myApp.controller('mainController',['$scope', function($scope){
    //main page
}]);

myApp.controller('statisticsController', ['$scope', '$log', '$filter', '$http', 'statesData' ,function($scope, $log, $filter, $http, statesData){

    //initialize state data
    $scope.states = statesData.data;

    $scope.selected = {};//currently selected satate (from either select box)
    $scope.states2 = $scope.states.data;//initilize a placeholder for the filtered select box
    $scope.selectedCounties;//placeholder for the list counties of the current selection
    $scope.countyTotal = 0;
    $scope.countyTotalAccurate;
    $scope.typeaheadtext = '';

    //this method changes the states2 as per the values in the type ahead filter box (typeaheadtext)
    $scope.typeAhead = function(){
        $scope.states2 = $scope.states.data.filter(function(typeAhead){
            return typeAhead.state.toLowerCase().includes($scope.typeaheadtext.toLowerCase());
        });
        //console.log($scope.states2);
    }

    $scope.stateDetails = function(selectedValue){
        $scope.selected = selectedValue; //set the current selection (this handles both boxes)

        $scope.countyTotal = 0;
        $scope.countyTotalAccurate = false;

        //make an http call to get the state county data for the currently selected state
        $http.get(selectedValue[0].detail).
            success(function (result){
                var countylist = [];
                result.data.forEach(function(element) {
                    countylist.push(element.county + " " + element.population + '\r\n');
                    $scope.countyTotal+=element.population;
                  });
                  $scope.selectedCounties = countylist;
                  if($scope.countyTotal === selectedValue[0].population)
                      $scope.countyTotalAccurate = true;
            }).error(function(){
                //error handling
            }); 
    }

    $scope.clearSelection = function(){
        $scope.selected = {};
        $scope.countyTotal = 0;
        $scope.selectedCounties = {};
        $scope.countyTotalAccurate = false;
    }
}]);
