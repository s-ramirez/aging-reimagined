(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$location','ApplicationService'];

  function MainController($location, ApplicationService) {
    var vm = this;
    vm.applications = ApplicationService.getApplications();
    vm.openApp = function(id) {
      $location.path('/application').search('appID', id);
    }
  }
})();
