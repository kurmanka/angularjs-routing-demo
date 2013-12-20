# What is this?

This is a little demo of an AngularJS-based 3-page website, 
with AJAX-loading of the pages and direct links to each page 
(with #fragment URLs).

 * AngularJS: http://angularjs.org/

It demonstrates the use of the Angular Routes.

 * AngularJS ngRoute module: http://docs.angularjs.org/api/ngRoute
 * ngView directive: http://docs.angularjs.org/api/ngRoute.directive:ngView

Also, the site demonstrates one way to make the current page's
link highlighted in the navigation. This is done via ng-class
directive of Angular. (Probably not the most elegant way to 
implement this.)

 * AngularJS ngClass http://docs.angularjs.org/api/ng.directive:ngClass

Additionally, the demo uses Twitter Bootstrap for CSS styles.

 * http://getbootstrap.com/


## How to see it in action?

Put the files into a web-accessible directory, and open the 
index.html file in your browser.

Or [see it online](http://ahinea.com/en/demo/angularjs-simple-website/), 
a slightly customized version.


## How to use it?

This demo may serve as a step on the path of getting to know 
AngularJS. Angular has many powerful features, while this 
little demo only uses 2 or 3 of them. But it can show, how to 
make a nice mini-site, that is potentially useful.

If you want to understand how it works, here are the main files 
you should look at:

 * index.html -- the master html and the wrapper-template for the pages. 
   Also, it defines the global Pages variable which lists the navigation items, 
   the page URLs and the link names.
 * scripts/nav.js -- creates the navigation links in the page header based on 
   the Pages variable.
 * scripts/app.js -- initializes the Angular App & configures it.
 * views/main.html and other html files in the views/ folder -- the 
   partials, the page content.

I've put a lot of comments into these files, to make them
easy to understand.


## See also

 * UI-Router
    * https://github.com/angular-ui/ui-router
    * http://angular-ui.github.io/ui-router/sample/ 
    * https://github.com/angular-ui/ui-router/tree/master/sample (demo)
 * Ben Nadel's work
    * http://www.bennadel.com/blog/2441-Nested-Views-Routing-And-Deep-Linking-With-AngularJS.htm
    * http://bennadel.github.io/AngularJS-Routing/ (demo)

## Credits

I've used yeoman and bower to produce this demo.

 * Yeoman http://yeoman.io
 * Yeoman generator for AngularJS https://github.com/yeoman/generator-angular
 * Bower https://github.com/bower/bower

(Both are great tools that I recommend.)


## License

This demo contains more code by the others than my code. My code is in 
public domain.
