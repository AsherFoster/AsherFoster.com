/**
 * Created by asher on 19/09/16.
 */
(function(){
  angular.module('afPage')
      .controller('projectsCtrl', function(){
        var PROJECTS = [
          {
            title: "This site",
            content: "This site is still in dev, and written in Angular, with Angular Material. I probably won't ever update this again",
            links: {
              "github": "//github.com/asherfoster/asherfoster.github.com"
            }
          },
          {
            title: "Server Status",
            content: "Server Status is a tool developed for Kohknowco Lab to show the statuses of project servers, and other information at a glance",
            links: {
              "github": "//github.com/asherfoster/ServerStatus"
            }
          },
          {
            title: "Developster",
            content: "I'm lead developer at Developster, a platform for kickstarting the journeys of young entrepreneurs",
            links: {
              "twitter": "//twitter.com/developsterteam",
              "site": "//developster.io"
            }
          },
          {
            title: "HTTPS Proxy",
            content: "A simple server to bypass HTTPS restrictions imposed by evil SysAdmins (I'm looking at you, Avonmore).",
            links: {
              "github": "//github.com/asherfoster/HTTPSProxy"
            }
          }
        ];
        var middle = Math.ceil(PROJECTS.length/2);
        this.list = [
          PROJECTS.slice(0, middle),
          PROJECTS.slice(middle)
        ];
      })
})();