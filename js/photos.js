var id = window.location.href.substring(window.location.href.lastIndexOf("?") + 1);
var app = angular.module('afPhotos', []);
app.controller('ListController', function($scope){
    $scope.photos = photos;
});
app.controller("PhotoController", function($scope){
    $scope.id = id;
    if(photos[id]){
        $scope.photo = photos[id];
        $scope.photoExists = true
    }
});