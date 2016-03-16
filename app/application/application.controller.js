(function() {
  'use strict';

  angular
    .module('app')
    .controller('ApplicationController', ApplicationController);

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
