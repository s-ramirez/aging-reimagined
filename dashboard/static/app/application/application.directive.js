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
      templateUrl: '/application/application.html',
      controller: ApplicationController,
      controllerAs: 'app',
      bindToController: true
    }
  }
  
  ApplicationController.$inject = ['$routeParams', '$sce', 'ApplicationService'];

  function ApplicationController($routeParams, $sce, ApplicationService) {
    var vm = this;

    var init = function() {
      var appID = $routeParams.appID;
      if(appID){
        vm.current = ApplicationService.getApplicationByID(appID);
        vm.current.url =  $sce.trustAsResourceUrl(vm.current.url);
      } else {
        vm.current = null;
      }
    }

    init();
  }
})();
