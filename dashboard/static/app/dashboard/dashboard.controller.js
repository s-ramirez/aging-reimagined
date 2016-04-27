(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$rootScope','$location','ApplicationService'];

  function MainController($rootScope, $location, ApplicationService) {
    var vm = this;
    vm.applications = ApplicationService.getApplications();
    vm.openApp = function(app) {
      vm.currentApplication = app;
    }
    vm.closeApp = function() {
      vm.currentApplication = null;
    }
    $rootScope.font = 14;
    vm.zoom = function(number) {
      $rootScope.font +=number;
    }
  }
})();
