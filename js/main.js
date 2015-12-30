var app = angular.module('site', []), theme, menu, main, nav = {
    expand: function(){
        menu.style.left = 0;
        main.style.left = "";
        main.style.width = "";
    },
    collapse: function(){
        menu.style.left = "-25%";
        main.style.left = "65px";
        main.style.width = "85%";
    }
};
app.controller('navController', function($scope, $interval){
    $interval(function(){
        document.getElementsByTagName("body")[0].setAttribute("theme", $scope.theme ? 'dark' : 'light')
    }, 10);
});
window.onload = function(){
    menu = document.getElementsByTagName("nav")[0],
    main = document.getElementsByTagName("main")[0]
}