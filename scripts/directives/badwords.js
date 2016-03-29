angular.module("moviedb").directive("badwords", function(){
    return{
        require: 'ngModel',
        link: function($scope, elem, attrs, ctrler){
            var badwords = ["fuck", "shit"];
            ctrler.$validators.badwords = function(modelValue, viewValue){
                var rawWords = modelValue || "";
                var words = rawWords.split(" ");
                for (var i in badwords){
                    var badword = badwords[i];
                    if (words.indexOf(badword) >= 0){
                        ctrler.badword = badword;
                        return false;
                    }
                }
                ctrler.badword = "";
                return true;
            }
        }
    };
});