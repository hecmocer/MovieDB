angular.module("moviedb").directive("mediaItemList", function(){
    return{
        restrict: "AE",
        templateURL: "views/mediaItemList.html"
    };
});