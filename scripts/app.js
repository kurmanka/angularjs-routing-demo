'use strict';

/* see http://www.jshint.com/docs/ if you want to know what this is: */
/* global Pages */

// Where do all these partials live?
var TemplatePrefix = 'views/';

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

  // here we use the Pages object, that is created in the
  // index.html. It defines the links and their names.
  // Links, title and class are members of this controller's scope.
  // they are used in the index.html.
  $scope.Links = Object.keys(Pages);
  $scope.title = function(i) { return Pages[i][1]; };
  $scope.class = function(i) {
    if (i === $scope.locationPath) { return 'active'; }
    else { return ''; }
  };

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
