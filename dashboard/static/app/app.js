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
        templateUrl: '/static/app/dashboard/dashboard.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
