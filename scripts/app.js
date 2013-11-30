'use strict';

// Define the paths and the partials (templates).
var Pages = {
  '/':        'main.html',
  '/about':   'about.html',
  '/contact': 'contact.html',
};

// Where do all these partials live?
var TemplatePrefix = 'views/';

// Create Angular application module
angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])

  .config(function ($routeProvider) {
    for ( var path in Pages ) {
      var template = Pages[path];
      $routeProvider.when( path, {templateUrl: TemplatePrefix + template});
    }
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