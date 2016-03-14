(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  function MainController() {
    var vm = this;
    vm.applications = [
      {
        color: "#e9b31f",
        url: "/",
        imageUrl: "images/twitter.png",
        title: "Community"
      },
      {
        color: "#aade17",
        url: "/",
        imageUrl: "images/twitter.png",
        title: "Games"
      },
      {
        color: "#15dcab",
        url: "/",
        imageUrl: "images/twitter.png",
        title: "Map"
      },
      {
        color: "#1a80dd",
        url: "/",
        imageUrl: "images/twitter.png",
        title: "Gallery"
      },
      {
        color: "#a955e4",
        url: "/",
        imageUrl: "images/twitter.png",
        title: "News"
      },
      {
        color: "#e36c53",
        url: "/",
        imageUrl: "images/twitter.png",
        title: "Health"
      }
    ];
  }
})();
