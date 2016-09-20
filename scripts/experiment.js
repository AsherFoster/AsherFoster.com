/**
 * Created by asher on 20/09/16.
 */
(function(){
  angular
      .module('afPage')
      .directive('afSticky', function($mdSticky){
        return {
          restrict: "A",
          link: function(scope, elem){
            window.addEventListener('scroll', function(){
              if(elem[0].getBoundingClientRect().top < 1) elem[0].classList.push("");
            })
          }
        }
      })
      .controller('experimentViewCtrl', function($scope){
        $scope.max = 6;
        $scope.id = parseInt(location.hash.substr(1)) || 1;
        $scope.experimentTitle = $scope.id ?
            'Experiment ' + $scope.id + ' // Asher Foster' :
            'Experiments // Asher Foster';
        $scope.back = function(){
          $scope.id > 1 && $scope.id--
        };
        $scope.next = function(){
          $scope.id < $scope.max && $scope.id++;
        };
        $scope.$watch('id', function(now){
          $scope.loading = true;
          location.hash = now;
          $scope.url = ("00" + now).slice(-3);
        });
        window.handleIframeLoad = function(iframe){
          $scope.$apply(function(){
            $scope.loading = false;
            iframe.style.height = 0;
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
          })
        }
      })
})();