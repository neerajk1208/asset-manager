//Instantiating the module
angular.module('app.main', [])

.controller('MainController', function ($scope, $location) {

  //assetEval is an array that will store all possible combinations of risk and asset allocations. 
  //The view of this array is currently a hidden tabular view. Please refer to index.html for more details. 
  $scope.assetEval = [];

  //Possibilities is an object of the following format: 

  /*
  $scope.possibilities = {
    '1': [10, 14, 155, 12, 14], 
    '2': [50, 23, 11, 12, 19], 
    '3': [50, 23, 11, 12, 19], 
    '4': [50, 23, 11, 12, 19], 
    '5': [50, 23, 11, 12, 19]
  }
  */
  $scope.possibilities = {};

  //the following variable "tabular" indicates whether or not to display the table of possible risk profiles
  $scope.tabular = false;

  //the following variable "riskEntered" indicates what stage of user-flow a user is in (entered risk)
  $scope.riskEntered = false;

  //the following variable "submissionComplete" indicates that the application is now ready to render the chart
  $scope.submissionComplete = false;

  //the user object will include portfolio details by key "asset" and value "number" pairs. 
  $scope.user = {};

  //the userBreakdown object will include the same portfolio details, except in percentage form. 
  $scope.userBreakdown = {};

  //Insights will be an array of strings pertaining to recommendations for each asset. 
  $scope.insights = [];

  //$scope.showTable will toggle the tabular view. 
  $scope.showTable = function() {
    $scope.tabular = true;
    console.log("this is the rating", $scope.rating1);
  };

  //$scope.showResults toggles the chart view and calls drawInsights function to render recommendations
  $scope.showResults = function() {
    $scope.submissionComplete = true;
    console.log("here is the user", $scope.user);
    $scope.drawInsights();
  };

  //Calculates actual percentages and compares them to expected percentages based on risk profile. 
  $scope.drawInsights = function() {
    var totalAmount = 0;
    for (var key in $scope.user) {
      totalAmount += $scope.user[key];
    }
    for (var key in $scope.user) {
      $scope.userBreakdown[key] = Math.round($scope.user[key]/totalAmount * 100);
    }
    $scope.insights = [];
    
    if ($scope.userBreakdown.bonds > $scope.data[0] + 5) {
      var diff = $scope.userBreakdown.bonds - $scope.data[0];
      $scope.insights.push("Decrease your bonds by " + diff + "%.");
    } else if ($scope.userBreakdown.bonds < $scope.data[0] - 5 ) {
      var diff = $scope.data[0] - $scope.userBreakdown.bonds;
      $scope.insights.push("Increase your bonds by " + diff + "%.");
    }

    if ($scope.userBreakdown.stocks > $scope.data[1] + 5) {
      var diff = $scope.userBreakdown.stocks - $scope.data[1];
      $scope.insights.push("Decrease your stocks by " + diff + "%.");
    } else if ($scope.userBreakdown.stocks < $scope.data[1] - 5 ) {
      var diff = $scope.data[1] - $scope.userBreakdown.stocks;
      $scope.insights.push("Increase your stocks by " + diff + "%.");
    }

    if ($scope.userBreakdown.etfs > $scope.data[2] + 5) {
      var diff = $scope.userBreakdown.etfs - $scope.data[2];
      $scope.insights.push("Decrease your etfs by " + diff + "%.");
    } else if ($scope.userBreakdown.etfs < $scope.data[2] - 5 ) {
      var diff = $scope.data[2] - $scope.userBreakdown.etfs;
      $scope.insights.push("Increase your etfs by " + diff + "%.");
    }

    if ($scope.userBreakdown.realEstate > $scope.data[3] + 5) {
      var diff = $scope.userBreakdown.realEstate - $scope.data[3];
      $scope.insights.push("Decrease your real estate by " + diff + "%.");
    } else if ($scope.userBreakdown.realEstate < $scope.data[3] - 5 ) {
      var diff = $scope.data[3] - $scope.userBreakdown.realEstate;
      $scope.insights.push("Increase your real estate by " + diff + "%.");
    }

    if ($scope.userBreakdown.cash > $scope.data[4] + 5) {
      var diff = $scope.userBreakdown.cash - $scope.data[4];
      $scope.insights.push("Decrease your cash by " + diff + "%.");
    } else if ($scope.userBreakdown.cash < $scope.data[4] - 5 ) {
      var diff = $scope.data[4] - $scope.userBreakdown.cash;
      $scope.insights.push("Increase your cash by " + diff + "%.");
    }
  };

  //hideTable will be called on click of a button to hide the table - not currently being used. 
  $scope.hideTable = function() {
    $scope.tabular = false;
  };
  
  //EvaluateRisk is a function called to generate the tabular view of all risk/asset possibilities.
  //Currently not being rendered
  $scope.evaluateRisk = function() {
    for (var i = 1; i<=10; i++) {
      var possibility = {};
      //call populate function to populate possiblity
      //populate possibility object with key value pairs with appropriate logic based on i
      $scope.populate(possibility, i);
      $scope.populate($scope.possibilities, i, true);
      //push possibility to assetEval array
      $scope.assetEval.push(possibility);
    }
  }

  //populates the $scope.possibilities array
  $scope.populate = function(object, risk, chart) {
    if (chart) {
      if (risk === 1) {
      object["1"] = [];
      object["1"].push(10);
      object["1"].push(0);
      object["1"].push(0);
      object["1"].push(0);
      object["1"].push(90);
      } else if (risk === 2) {
        object["2"] = [];
        object["2"].push(10);
        object["2"].push(10);
        object["2"].push(0);
        object["2"].push(0);
        object["2"].push(80);
      } else if (risk === 3) {
        object["3"] = [];
        object["3"].push(10);
        object["3"].push(10);
        object["3"].push(10);
        object["3"].push(0);
        object["3"].push(70);
      } else if (risk === 4) {
        object["4"] = [];
        object["4"].push(20);
        object["4"].push(10);
        object["4"].push(10);
        object["4"].push(0);
        object["4"].push(60);
      } else if (risk === 5) {
        object["5"] = [];
        object["5"].push(15);
        object["5"].push(15);
        object["5"].push(10);
        object["5"].push(10);
        object["5"].push(50);
      } else if (risk === 6) {
        object["6"] = [];
        object["6"].push(15);
        object["6"].push(15);
        object["6"].push(15);
        object["6"].push(15);
        object["6"].push(40);
      } else if (risk === 7) {
        object["7"] = [];
        object["7"].push(10);
        object["7"].push(20);
        object["7"].push(20);
        object["7"].push(20);
        object["7"].push(30);
      } else if (risk === 8) {
        object["8"] = [];
        object["8"].push(5);
        object["8"].push(30);
        object["8"].push(10);
        object["8"].push(30);
        object["8"].push(20);
      } else if (risk === 9) {
        object["9"] = [];
        object["9"].push(0);
        object["9"].push(40);
        object["9"].push(5);
        object["9"].push(35);
        object["9"].push(20);
      } else if (risk === 10) {
        object["10"] = [];
        object["10"].push(5);
        object["10"].push(40);
        object["10"].push(5);
        object["10"].push(40);
        object["10"].push(10);
      }
    } else {
      if (risk === 1) {
        object.risk = 1;
        object.bonds = 10;
        object.stocks = 0; 
        object.etfs = 0;
        object.realEstate = 0;
        object.cash = 90;
      } else if (risk === 2) {
        object.risk = 2;
        object.bonds = 10;
        object.stocks = 10; 
        object.etfs = 0;
        object.realEstate = 0;
        object.cash = 80;
      } else if (risk === 3) {
         object.risk = 3;
        object.bonds = 10;
        object.stocks = 10; 
        object.etfs = 10;
        object.realEstate = 0;
        object.cash = 70;
      } else if (risk === 4) {
         object.risk = 4;
        object.bonds = 20;
        object.stocks = 10; 
        object.etfs = 10;
        object.realEstate = 0;
        object.cash = 60;
      } else if (risk === 5) {
         object.risk = 5;
        object.bonds = 15;
        object.stocks = 15; 
        object.etfs = 10;
        object.realEstate = 10;
        object.cash = 50;
      } else if (risk === 6) {
        object.risk = 6;
        object.bonds = 15;
        object.stocks = 15; 
        object.etfs = 15;
        object.realEstate = 15;
        object.cash = 40;
      } else if (risk === 7) {
         object.risk = 7;
        object.bonds = 10;
        object.stocks = 20; 
        object.etfs = 20;
        object.realEstate = 20;
        object.cash = 30;
      } else if (risk === 8) {
        object.risk = 8;
        object.bonds = 5;
        object.stocks = 30; 
        object.etfs = 10;
        object.realEstate = 30;
        object.cash = 25;
      } else if (risk === 9) {
        object.risk = 9;
        object.bonds = 0;
        object.stocks = 40; 
        object.etfs = 5;
        object.realEstate = 35;
        object.cash = 20;
      } else if (risk === 10) {
        object.risk = 10;
        object.bonds = 5;
        object.stocks = 40; 
        object.etfs = 5;
        object.realEstate = 40;
        object.cash = 10;
      }
    }
    return object;
    //end of this function, i have an object with all appropriate fields populated
  }

  //Upon load of page, will call evaluateRisk function
  $scope.evaluateRisk();

  //$scope.assets will populate the labels associated with the doughnut chart. 
  $scope.assets = ["Bonds", "Stocks", "ETFs", "Real Estate", "Cash"];

  //Default population of data for doughnut chart
  $scope.data = $scope.possibilities[1];

  //Default status for slider - starts at 0.
  $scope.rating = 0;

  //Function that will be called whenever the slider is moved, in order to update data associated with doughnut chart. 
  $scope.moveChart = function() {
    $scope.data = $scope.possibilities[$scope.rating];
    $scope.riskEntered = true;
  }

});