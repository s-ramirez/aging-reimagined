(function() {
  'use strict';

  angular
    .module('app')
    .service('ApplicationService', ApplicationService);

  function ApplicationService() {
    var applications = [
      {
        id: 1,
        color: "#e9b31f",
        url: "http://sramirez.me/ar-community",
        imageUrl: "static/images/twitter.png",
        title: "Community"
      },
      {
        id: 2,
        color: "#aade17",
        url: "/",
        imageUrl: "static/images/twitter.png",
        title: "Games"
      },
      {
        id: 3,
        color: "#15dcab",
        url: "/",
        imageUrl: "static/images/twitter.png",
        title: "Map"
      },
      {
        id: 4,
        color: "#1a80dd",
        url: "/",
        imageUrl: "static/images/twitter.png",
        title: "Gallery"
      },
      {
        id: 5,
        color: "#a955e4",
        url: "/",
        imageUrl: "static/images/twitter.png",
        title: "News"
      },
      {
        id: 6,
        color: "#e36c53",
        url: "/",
        imageUrl: "static/images/twitter.png",
        title: "Health"
      }
    ];

    function getApplications() {
      return applications;
    }

    function getApplicationByID(id) {
      for(var i = 0; i < applications.length; i++) {
        if(applications[i].id == id) {
          return applications[i];
        }
      }
      return null;
    }

    return {
      getApplications: getApplications,
      getApplicationByID: getApplicationByID
    }
  }
})();
