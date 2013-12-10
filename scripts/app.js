'use strict';

/* see http://www.jshint.com/docs/ if you want to know what this is: */
/* global Pages */
/* global TemplatePrefix */

// Create Angular application module angularjsSimpleWebsiteApp.
// Declare ngRoute as a dependency. http://docs.angularjs.org/api/ngRoute
// Then configure the $routeProvider by defining the routes.
angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])

  .config(function ($routeProvider) {
    // register the routes and the templates
    // http://docs.angularjs.org/api/ngRoute.$routeProvider
    for ( var path in Pages ) {
      var template = Pages[path][0];
      $routeProvider.when( path, {templateUrl: TemplatePrefix + template});
    }
    // the default route
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  })
;

/* jshint unused:false */

// The NavigationLinks controller.
function NavigationLinks( $scope, $location ) {
  // $routeChangeSuccess is an event that is fired,
  // when the app has switched from one route to another.
  // http://docs.angularjs.org/api/ngRoute.$route
  // here we subscribe to that event. 
  $scope.$on('$routeChangeSuccess',
    function() {
      $scope.locationPath = $location.path();
      console.log('locationPath: ' + $location.path() );
    }
  );
}
