var app = angular.module('site', []), theme;
app.controller('navController', function($scope, $rootScope){
    theme = $scope.theme ? 'dark' : 'light';
})