//Instantiating the module
angular.module('app.main', [])

.controller('MainController', function ($scope, $location) {

  //Here I will include my controller logic

  //In my assetEval, I will store all possible combinations of assets associated with a certain risk
  $scope.assetEval = [];
  $scope.possibilities = {};
  $scope.tabular = false;
  $scope.riskEntered = false;
  $scope.submissionComplete = false;

  $scope.user = {}
  $scope.userBreakdown = {};
  $scope.insights = [];
  //evaluateRisk function will do the following: 

  //It will loop from 1 - 10
  //In each iteration
    //Create an object that stores the following keys value pairs
      //bonds: num%
      //stocks: num%
      //etfs: num%
      //realEstate: num%
      //cash: num%

  $scope.showTable = function() {
    $scope.tabular = true;
    console.log("this is the rating", $scope.rating1);
  }

  $scope.showResults = function() {
    $scope.submissionComplete = true;
    console.log("here is the user", $scope.user);
    $scope.drawInsights();
  }

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

  }

  $scope.hideTable = function() {
    $scope.tabular = false;
  }
  

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
    console.log($scope.possibilities);
  }

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

  $scope.evaluateRisk();
  $scope.assets = ["Bonds", "Stocks", "ETFs", "Real Estate", "Cash"];
  $scope.data = $scope.possibilities[1];
  $scope.rating = 0;
  $scope.moveChart = function() {
    $scope.data = $scope.possibilities[$scope.rating];
    $scope.riskEntered = true;
  }
  

  //At this point, my array will be populated with 10 objects
  //these objects will ng - repeat on my index view

  /*

  LOw risk: 90% cash, 10% bonds, everything else is 0;
  High risk: 90% stocks, 10% real estate, everything else is 0;



  */

});

//This will represent the controller for my index page that will handle my logic

//Investment account, see how your assets are allocated

//Donut Chart

//5 categories

//Increase the risk from 4 - 7%
  //Asset allocation changes

//less risky to more risky allocation 

//Table
  //6 columns
  //1. Risk Level: 1 - 10
  //2. Bonds
  //3. Stocks
  //4. ETFs
  //5. Real Estate
  //6. Cash

//Data Table

// kshah@mybrightplan.com

// Finish it
//How much more time you took
//Note of the NDA by email 
//Sign it, followup call over the weekend - noon tomorrow or Sunday
//Go over the code you have written

//React - how would you change it 
//That would be my coding task

//

//Captures ten rows for this structure

//If risk is 1 - minimum risk, on cash
//If risk is 10 - maximize risk, on stocks

//Chart

//Slider at the bottom 

//If you move the slider, there will be a reallocation
//User, you control the risk
  //Changes on teh donut chart 

//