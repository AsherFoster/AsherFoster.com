/**
 * Created by asher on 19/09/16.
 */
(function(){
  angular
      .module('afPage')
      .directive('subheader', function(){
        angular.element(document.head).append('<link rel="stylesheet" type="text/css" href="/styles/subheader.css">');
        return {
          restrict: 'E',
          templateUrl: '/templates/subheader.html',
          scope: {
            text: '=',
            image: '=?'
          },
          controller: function($scope, $element){
            window.addEventListener('scroll', function(){
              $scope.$apply(function(){
                $scope.offscreen = $element.children()[0].getBoundingClientRect().bottom <= 50;
              })
            })
          }
        }
      });
})();