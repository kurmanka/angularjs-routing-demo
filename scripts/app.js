'use strict';

/* see http://www.jshint.com/docs/ if you want to know what this is: */
/* global Pages */
/* global _gaq */

// Where do all these partials live?
var TemplatePrefix = 'views/';

// Create Angular application module angularjsSimpleWebsiteApp.
// Declare ngRoute as a dependency. http://docs.angularjs.org/api/ngRoute
// Then configure the $routeProvider by defining the routes.

var app = angular.module('angularjsSimpleWebsiteApp', ['ngRoute'])

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

/* Google Analytics tracking on route (and view) change */
var lastTrackedPath;
app.run( function ($rootScope, $location) {
  $rootScope.$on('$routeChangeSuccess',
    function() {
      console.log('locationPath: ' + $location.path() );

      if (lastTrackedPath === $location.path()) {
        // Skip tracking. It happens on the initiall app load at the least.
        // Otherwise the #/ location would be tracked twice for every visit.
        // For some reason the $routeChangeSuccess event fires twice in this 
        // case.
      } else {
        // http://stackoverflow.com/questions/7982454/how-should-i-handle-tracking-fragment-page-views-in-google-analytics
        var url = location.pathname+location.search+location.hash;
        console.log( 'track pageview (ga):', url );
        _gaq.push(['_trackPageview', url]);
        lastTrackedPath = $location.path();
      }

    }
  );
});

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
    }
  );
}
