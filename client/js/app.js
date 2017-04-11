angular.module('myApp', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(($routeProvider, $locationProvider) => {
    const homeRoute = {
      controller: 'HomeController',
      templateUrl: 'views/home.html',
    };

    const aboutRoute = {
      controller: 'AboutController',
      templateUrl: 'views/about.html',
    };

    const publicationsRoute = {
      controller: 'PublicationsController',
      templateUrl: 'views/publications.html',
    };

    const worksRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works.html',
    };

    const musicemRoute = {
      controller: 'WorksController',
      templateUrl: 'views/works/musicem.html',
    };
    const lonerTour = {
      controller: 'WorksController',
      templateUrl: 'views/works/lonerTour.html',
    };

    $routeProvider.when('/', homeRoute);
    $routeProvider.when('/about', aboutRoute);
    $routeProvider.when('/publications', publicationsRoute);
    $routeProvider.when('/works', worksRoute);
    $routeProvider.when('/musicem', musicemRoute);
    $routeProvider.when('/lonertour', musicemRoute);
    $routeProvider.otherwise({ redirectTo: '/' });
    $locationProvider.hashPrefix('');
  });
