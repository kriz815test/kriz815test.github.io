/**
 * Created by kriz on 1/18/2017.
 */
// create the module and name it mykdrApp
// also include ngRoute for all our routing needs
var mykdrApp = angular.module('mykdrApp', ['ngRoute']);

// configure our routes
mykdrApp.config(function($routeProvider) {
    $routeProvider

    // route for the theme page
        .when('/', {
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })
    
     // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // route for the landscape page
        .when('/landscape', {
            templateUrl : 'pages/landscape.html',
            controller  : 'landscapeController'
        })
        // route for the culture page
        .when('/culture', {
            templateUrl : 'pages/culture.html',
            controller  : 'cultureController'
        })
        // route for the trending page
        .when('/events', {
            templateUrl : 'pages/events.html',
            controller  : 'eventsController'
        })
        // route for the services page
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        })
        // route for the emergency page
        .when('/emergency', {
            templateUrl : 'pages/emergency.html',
            controller  : 'emergencyController'
        })
        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        // route for the trending page
        .when('/trending', {
            templateUrl : 'pages/trending.html',
            controller  : 'trendingController'
        })
       
});

// create the controller and inject Angular's $scope
mykdrApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!'
    
    
     $rootScope.closed() = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";

        var a= document.getElementById("langmenu");
        a.style.display="inline-block";

        var b= document.getElementById("english");
        b.style.display="none";
        var c= document.getElementById("malayalam");
        c.style.display="none";
    };

    $rootScope.opened() = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };

    $rootScope.langselect() = function() {
        var z= document.getElementById("langmenu");
        z.style.display="none";
        var x= document.getElementById("english");
        x.style.display="inline-block";
        var y= document.getElementById("malayalam");
        y.style.display="inline-block";
    };

    $rootScope.eng() = function() {

        alert("selected language: ENGLISH");

        location.reload();
    };

    $rootScope.mal() = function() {

        alert("selected language: മലയാളം");

        location.reload();

    };

    $rootScope.menuload() = function() {

        var c= document.getElementById("malayalam");
        if(c.style.display=="inline-block")
           {location.reload();}
    };

});

mykdrApp.controller('homeController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };

mykdrApp.controller('landscapeController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});

mykdrApp.controller('abouttController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});

mykdrApp.controller('servicesController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});

mykdrApp.controller('emergencyController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});

mykdrApp.controller('cultureController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});

mykdrApp.controller('eventsController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});

mykdrApp.controller('trendingController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    
    $scope.closed = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
    };

    $scope.opened = function() {
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
    };
});


});


