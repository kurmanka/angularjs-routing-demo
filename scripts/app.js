'use strict';

angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run( ['$rootScope','$location',
    function($rootScope,$location) {
      // Listen to the $routeChangeSuccess event. The event handler
      // will update the path model in the root scope and that
      // controls which item is highlighted in the topnav.
      $rootScope.$on('$routeChangeSuccess',
        function() {
          $rootScope.path = $location.path();
          console.log('path: ' + $location.path() );
        }
      );
    }
  ]);