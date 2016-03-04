var app = angular.module("blackFriday", ['ngRoute','ngAnimate']);
var currency = $filter('currency');
    //formats = $locale.NUMBER_FORMATS;
    bind.constructor(
        function($scope,$filter){
        $scope.$watch('count', function (val){

            $scope.count = $filter('currency')(val);

        }, true);
    }
    });
app.config(function($routeProvider,$locationProvider){
    $routeProvider.when("/about",{
        templateUrl: 'about.html',
        controller: 'about'
    });

    $routeProvider.when("/contact",{
        templateUrl: 'contact.html',
        controller: 'contact'
    });

});

app.controller("about", function($scope, $location){
    $scope.message ="about page controller";
    this.$location = $location;
});

app.controller("contact", function($scope, $location){
    $scope.message ="contact page controller";
    this.$location = $location;
});

app.controller("mainController", function($scope,$location){
    $scope.message = "my first message";
    this.$location = $location;

});
