'use strict';

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