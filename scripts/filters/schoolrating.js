angular.module("moviedb").filter("schoolrating",
    [function(){
        return function(rating, mode){
            if (9 <= rating && rating <= 10){
                return(mode == "US")? "A" : "SB";
            } else if (7 <= rating && rating < 9){
                return(mode == "US")? "B" : "NT";
            } else if (6 <= rating && rating < 7){
                return(mode == "US")? "C" : "BN";
            } else if (5 <= rating && rating < 6){
                return(mode == "US")? "D" : "SF";
            } else if (rating < 5){
                return(mode == "US")? "E" : "IN";
            }
        }
    }]
    );