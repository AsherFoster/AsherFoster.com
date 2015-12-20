var app = angular.module('site', []), theme;
function switchTheme(to){
    document.getElementsByTagName("body")[0].setAttribute("theme", to ? 'dark' : 'light')
}
app.controller('navController', function($scope, $interval){
//    theme = $scope.theme ? 'dark' : 'light';
    $interval(function(){switchTheme($scope.theme)}, 10);
})