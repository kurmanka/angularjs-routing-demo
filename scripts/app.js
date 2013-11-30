'use strict';

/* see http://www.jshint.com/docs/ if you want to know what this is: */
/* global Pages */
/* global TemplatePrefix */

// Create Angular application module
angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])

  .config(function ($routeProvider) {
    // register the routes and the templates
    for ( var path in Pages ) {
      var template = Pages[path];
      $routeProvider.when( path, {templateUrl: TemplatePrefix + template});
    }
    // the default route
    $routeProvider
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