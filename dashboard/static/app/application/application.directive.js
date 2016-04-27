(function() {
  'use strict';

  angular
    .module('app')
    .directive('application', Application);

  function Application() {
    return {
      scope: {
        current: '='
      },
      restrict: 'E',
      replace: true,
      templateUrl: 'static/app/application/application.html',
      controller: ApplicationController,
      controllerAs: 'app',
      bindToController: true
    }
  }

  ApplicationController.$inject = ['$routeParams', '$sce', 'ApplicationService'];

  function ApplicationController($routeParams, $sce, ApplicationService) {
    var vm = this;

    var init = function() {
    }

    vm.trust = function(url) {
      return $sce.trustAsResourceUrl(url)
    }

    init();
  }
})();
