/**
 * Created by asher on 19/09/16.
 */
(function(){
  if(opener) opener.location = '//asherfoster.com/opener';
  angular
      .module('afPage', ['ngMaterial'])
      .config(function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('amber')
      })
})();