app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'AppController'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/#install', {
        redirectTo: '/#/#install'
    })
    .when('/styleguide', {
        templateUrl: 'views/styleguide.html'
    })
    .otherwise ({
        redirectTo: '/'
    })
});
