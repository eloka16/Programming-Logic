'use strict'

module.exports = {

    findMinMax: function (est) {
		var b = Math.min.apply(null, est);
	    var a = Math.max.apply(null, est);
	    if (a===b){
	        return [a];
	    } else {
	        return [b,a];
	    };
    },

    fizzBuzz: function (n) {
        if (n % 3 === 0 && n % 5 === 0){
            return "FizzBuzz";
        } else if (n % 3 === 0) {
            return "Fizz";
        } else if (n % 5 === 0){
            return "Buzz";
        } else {
            return n;
        }
    },

    aritGeo: function (Array) {        
        if(Array.length === 0) {
            return 0;
        }else {
            for(var i = 1; i < Array.length; i++){
                if(Array[i+1] - Array[i] === Array[i+2] - Array[i+1]){
                    return "Arithmetic";
                }else if(Array[i+1]/Array[i] === Array[i+2]/Array[i+1]){
                    return "Geometric";
                }else{
                    return -1;
                }
            }
    
        }
    }
}
