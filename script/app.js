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
            //console.log("begings with"+typeAhead.state.startsWith($scope.typeaheadtext));
            return typeAhead.state.toLowerCase().includes($scope.typeaheadtext.toLowerCase());
        });
        //console.log($scope.states2);
    }

    $scope.stateDetails = function(selectedValue){
        $scope.selected = selectedValue; //set the current selection (this handles both boxes)
        //this keeps the selection of both boxes in sync
        $scope.selection1 = selectedValue;
        $scope.selection2 = selectedValue;
        //console.log($scope.selection2)
        //reset the values of the county totals
        $scope.countyTotal = 0;
        $scope.countyTotalAccurate = false;
        //console.log("value of selectedValue" + selectedValue);
        //console.log($scope.selected);
        //console.log(selectedValue[0].detail);

        //make an http call to get the state county data for the currently selected state
        $http.get(selectedValue[0].detail).
            success(function (result){
                //console.log(result);
                var countylist = [];
                result.data.forEach(function(element) {
                    countylist.push(element.county + " " + element.population + '\r\n');
                    $scope.countyTotal+=element.population;
                    //console.log("element "+element.county);
                  });
                  $scope.selectedCounties = countylist;
                  if($scope.countyTotal === selectedValue[0].population)
                      $scope.countyTotalAccurate = true;
            }).error(function(){
                //error handling
            }); 
    }

    $scope.clearSelection = function(selectedBox){
        if(selectedBox==='selection1'){
            $scope.selection1 = {};          
        }
        if(selectedBox==='selection2'){
            $scope.selection2 = {};
        }
        if($scope.selection1 === {} && $scope.selection2 === {}){
        }
    }

}]);
