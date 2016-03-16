(function() {
  'use strict';

  angular
    .module('app', [
        'ngTouch',
        'ngRoute'
    ]).config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/application', {
        templateUrl: 'app/application/application.html',
        controller: 'ApplicationController',
        controllerAs: 'app'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
