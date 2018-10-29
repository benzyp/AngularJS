var myApp = angular.module('myApp',['ngMessages','ngRoute']); //dependency modules

myApp.config(function($routeProvider,$locationProvider){
    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }).when ('/statistics', {
        templateUrl: 'pages/statistics.html',
        controller: 'statisticsController'
    });
});


myApp.controller('mainController',['$scope', function($scope){
    //main page
}]);

myApp.controller('statisticsController', ['$scope', '$log', '$filter', '$http' ,function($scope, $log, $filter, $http){

  //initialize state data
  $scope.states = {
 "data":[
  {
   "state":"Alabama",
   "population":4833722,
   "counties":67,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Alabama"
  },
  {
   "state":"Alaska",
   "population":735132,
   "counties":29,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Alaska"
  },
  {
   "state":"Arizona",
   "population":6626624,
   "counties":15,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Arizona"
  },
  {
   "state":"Arkansas",
   "population":2959373,
   "counties":75,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Arkansas"
  },
  {
   "state":"California",
   "population":38332521,
   "counties":58,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/California"
  },
  {
   "state":"Colorado",
   "population":5268367,
   "counties":64,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Colorado"
  },
  {
   "state":"Connecticut",
   "population":3596080,
   "counties":8,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Connecticut"
  },
  {
   "state":"Delaware",
   "population":925749,
   "counties":3,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Delaware"
  },
  {
   "state":"District of Columbia",
   "population":646449,
   "counties":1,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/District+of+Columbia"
  },
  {
   "state":"Florida",
   "population":19552860,
   "counties":67,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Florida"
  },
  {
   "state":"Georgia",
   "population":9992167,
   "counties":159,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Georgia"
  },
  {
   "state":"Hawaii",
   "population":1404054,
   "counties":5,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Hawaii"
  },
  {
   "state":"Idaho",
   "population":1612136,
   "counties":44,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Idaho"
  },
  {
   "state":"Illinois",
   "population":12882135,
   "counties":102,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Illinois"
  },
  {
   "state":"Indiana",
   "population":6570902,
   "counties":92,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Indiana"
  },
  {
   "state":"Iowa",
   "population":3090415,
   "counties":99,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Iowa"
  },
  {
   "state":"Kansas",
   "population":2893957,
   "counties":105,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Kansas"
  },
  {
   "state":"Kentucky",
   "population":4395295,
   "counties":120,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Kentucky"
  },
  {
   "state":"Louisiana",
   "population":4625470,
   "counties":64,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Louisiana"
  },
  {
   "state":"Maine",
   "population":1328302,
   "counties":16,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Maine"
  },
  {
   "state":"Maryland",
   "population":5928814,
   "counties":24,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Maryland"
  },
  {
   "state":"Massachusetts",
   "population":6692824,
   "counties":14,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Massachusetts"
  },
  {
   "state":"Michigan",
   "population":9895622,
   "counties":83,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Michigan"
  },
  {
   "state":"Minnesota",
   "population":5420380,
   "counties":87,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Minnesota"
  },
  {
   "state":"Mississippi",
   "population":2991207,
   "counties":82,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Mississippi"
  },
  {
   "state":"Missouri",
   "population":6044171,
   "counties":115,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Missouri"
  },
  {
   "state":"Montana",
   "population":1015165,
   "counties":56,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Montana"
  },
  {
   "state":"Nebraska",
   "population":1868516,
   "counties":93,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Nebraska"
  },
  {
   "state":"Nevada",
   "population":2790136,
   "counties":17,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Nevada"
  },
  {
   "state":"New Hampshire",
   "population":1323459,
   "counties":10,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/New+Hampshire"
  },
  {
   "state":"New Jersey",
   "population":8899339,
   "counties":21,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/New+Jersey"
  },
  {
   "state":"New Mexico",
   "population":2085287,
   "counties":33,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/New+Mexico"
  },
  {
   "state":"New York",
   "population":19651127,
   "counties":62,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/New+York"
  },
  {
   "state":"North Carolina",
   "population":9848060,
   "counties":100,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/North+Carolina"
  },
  {
   "state":"North Dakota",
   "population":723393,
   "counties":53,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/North+Dakota"
  },
  {
   "state":"Ohio",
   "population":11570808,
   "counties":88,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Ohio"
  },
  {
   "state":"Oklahoma",
   "population":3850568,
   "counties":77,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Oklahoma"
  },
  {
   "state":"Oregon",
   "population":3930065,
   "counties":36,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Oregon"
  },
  {
   "state":"Pennsylvania",
   "population":12773801,
   "counties":67,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Pennsylvania"
  },
  {
   "state":"Rhode Island",
   "population":1051511,
   "counties":5,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Rhode+Island"
  },
  {
   "state":"South Carolina",
   "population":4774839,
   "counties":46,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/South+Carolina"
  },
  {
   "state":"South Dakota",
   "population":844877,
   "counties":66,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/South+Dakota"
  },
  {
   "state":"Tennessee",
   "population":6495978,
   "counties":95,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Tennessee"
  },
  {
   "state":"Texas",
   "population":26448193,
   "counties":254,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Texas"
  },
  {
   "state":"Utah",
   "population":2900872,
   "counties":29,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Utah"
  },
  {
   "state":"Vermont",
   "population":626630,
   "counties":14,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Vermont"
  },
  {
   "state":"Virginia",
   "population":8260405,
   "counties":134,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Virginia"
  },
  {
   "state":"Washington",
   "population":6971406,
   "counties":39,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Washington"
  },
  {
   "state":"West Virginia",
   "population":1854304,
   "counties":55,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/West+Virginia"
  },
  {
   "state":"Wisconsin",
   "population":5742713,
   "counties":72,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Wisconsin"
  },
  {
   "state":"Wyoming",
   "population":582658,
   "counties":23,
   "detail":"http:\/\/pos.idtretailsolutions.com\/countytest\/states\/Wyoming"
  }
 ]
}

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
            return typeAhead.state.toLowerCase().startsWith($scope.typeaheadtext.toLowerCase());
        });
        //console.log($scope.states2);
    }

    $scope.stateDetails = function(selectedValue){
        $scope.selected = selectedValue; //set the current selection (this handles both boxes)
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
}]);
