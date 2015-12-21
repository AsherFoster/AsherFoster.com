var app = angular.module('site', []), theme, nav = {
    expand: function(){
        document.getElementsByTagName("nav")[0].style.left = 0;
        document.getElementsByTagName("main")[0].style.left = "";
        document.getElementsByTagName("main")[0].style.width = "";
    },
    collapse: function(){
        document.getElementsByTagName("nav")[0].style.left = "-25%";
        document.getElementsByTagName("main")[0].style.left = "100px";
        document.getElementsByTagName("main")[0].style.width = "85%";
    }
};
app.controller('navController', function($scope, $interval){
    $interval(function(){
        document.getElementsByTagName("body")[0].setAttribute("theme", $scope.theme ? 'dark' : 'light')
    }, 10);
})