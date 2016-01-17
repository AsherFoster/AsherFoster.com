app.controller('postController', function($scope){
    $scope.posts = posts;
});
d.onscroll = function(){
    if(pageYOffset > document.body.clientHeight * 0.5){
        d.getElementsByTagName("main")[0].style.opacity = 1;
    }
    if(pageYOffset > document.body.clientHeight * 0.7){
        d.getElementsByClassName("nav")[0].style.background = "#555";
    }else{
        d.getElementsByClassName("nav")[0].style.background = ""
    }
}