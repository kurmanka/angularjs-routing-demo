'use strict';

/*
   This piece uses jQuery to create the navigation 
   links in the page header, with the needed angular 
   directives in them. This is to make the right link
   highlighted at each route.
*/

/* global $ */
/* global Pages */


$(function(){
    // Create a navigation item (a link) for each page.
    for ( var path in Pages ) {
      var title = Pages[path][1];

      $('.header ul.nav').append(
        '<li ' +
        'ng-class="{active: (path==\'' + path + '\')}">' +
        '<a href="#' + path + '">' +
        title +
        '</a>' +
        '</li>');
    }

  });