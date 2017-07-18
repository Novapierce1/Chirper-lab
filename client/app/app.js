var app = angular.module("myApp", ["ngRoute", "myPosts"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "../views/home.html",
        controller: "homecontroller"
    })
    .when("/add", {
        templateUrl: "../views/add.html"
    })
    .when("/list", {
        templateUrl: "../views/list.html"
    })
    .when("/single", {
        templateUrl: "../views/single.html"
    })
});
var post = angular.module('myPosts', []);
post.controller('homecontroller', function(){
    
});
post.controller('PostController', function() {
    this.post = {};
        this.addpost = function(user){
            user.post.push(this.post);
            this.post = {};
    };
});