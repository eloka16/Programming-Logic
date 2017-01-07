'use strict'

module.exports = {

    findMinMax: function (arr) {
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
        }else if (n % 3 === 0) {
            return "Fizz";
        } else if (n % 5 === 0){
            return "Buzz";
        } else {
            return n;
        }
    },

    aritGeo: function (arr) {
        // TODO
	return 0;
    }
}
