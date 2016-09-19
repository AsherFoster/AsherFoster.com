/**
 * Created by asher on 19/09/16.
 */
(function(){
  angular
      .module('afPage')
      .directive('nav', function(){
        return {
          restrict: "E",
          templateUrl: "/templates/nav.html"
        }
      })
      .directive('footer', function(){
        return {
          restrict: 'E',
          templateUrl: "/templates/footer.html"
        }
      })
})();