'use strict'

module.exports = {

    findMinMax: function (arr) {
		var min = null;
	    var max = null;
        for(var i = 0; i < arr.length; i++) {
            var elem = arr[i];
            if(min === null || min > elem) min = elem;
            if(max === null || max < elem) max = elem;
        }
        if(min == max){
            return[min];
        }else {
            return [min,max]
        }
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

    aritGeo: function (arr) {        
        if(arr.length === 0) {
  return 0;
}

var diff = arr[1] - arr[0];
var ratio = arr[1] / arr[0];

var arith = true;
var geo = true;

for(var i = 0; i < arr.length - 1; i++)
{
    if( arr[i + 1] - arr[i] !== diff )
      arith = false;
    if(arr[i + 1] / ratio !== arr[i])
      geo = false;
}

if(arith === true)
    return "Arithmetic";
else if(geo === true)
    return "Geometric";
else
    return -1;
    }
}
