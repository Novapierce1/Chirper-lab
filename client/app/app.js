var app = angular.module('myApp', ['ngRoute', ])

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "../views/home.html",
    })
    .when("/add", {
        templateUrl: "../views/add.html",
    })
    .when("/list", {
        templateUrl: "../views/list.html"
    })
    .when("/single/:id", {
        templateUrl: "../views/single.html",
    })
});

app.controller('addController', function($scope,$http) {
    $scope.posts = function(){ 
        var info = ({
            user : $scope.user,
            alias : $scope.alias,
            message : $scope.message
        });
        console.log(info)
    $http.post('http://localhost:3000/api/chirps', info)
        .then(function(response){ 
            alert('Hello Tenno');
        }, function myError(response){
            alert('Something went wrong')
        });
        
    }
});

app.controller('listController',  function($http, $scope, $location){
    $http.get('http://localhost:3000/api/chirps')
       .then(function(success){
        $scope.data=success.data
    },  function(err){
        alert('something went wrong')
    })
    $scope.getId=function(id){
        console.log(id)
        $location.path('/single/' + id)
    }

    $scope.remove=function(id){
    $http.delete('http://localhost:3000/api/chirps/' + id)
        .then(function(success){
         $location.path('/list/');
        }
        )}
    
}); 

app.controller('singleController',  function($http, $scope, $routeParams, $window, $location){
    var id = $routeParams.id;
    $http.get('http://localhost:3000/api/chirps/' + id)
    .then(function(success){
        $scope.data=success.data
    });
    $scope.remove=function(id){
    $http.delete('http://localhost:3000/api/chirps/' + id)
        .then(function(success){
        $location.path('/list/');;
        }
        )}
    })
