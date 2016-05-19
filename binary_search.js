(function () {
    "use strict";

    // binary search algorithm expressed in JavaScript
    // Author: Alvin Milton

    var guess,
        chosen,
        oldMin = 0;

    var grid = function (x, y) {
        // create Array with min, max
        var i,
            gridArray = [];

        for (i = x; i <= y; i+=1) {
            gridArray.push(i);
        }
        return gridArray;
    };

    var calc = function (min, max) {
        var newGrid = [];
        // start searching & create guess with min, max
        guess = parseInt((min + max) / 2, 10);
        console.log('My guess is: ' + guess);
        if (chosen < parseInt((min + max) / 2, 10)) {
            max = guess - 1;
            console.log('The chosen num is less than ' + guess);
            newGrid = grid(oldMin, max);
            console.log(newGrid);
            calc(oldMin, max); // recurse
        } else if (chosen > parseInt((min + max) / 2, 10)) {
            console.log('The chosen num is more than ' + guess);
            min = guess + 1;
            newGrid = grid(guess + 1, max);
            console.log(newGrid);
            oldMin = min; // store this num for later use
            calc(min, max); // recurse
        } else {
            console.log(chosen + ' has been found!');
            return false;
        }
    };

    var run = function (x, y) {
        var arr = grid(x, y);
        chosen = parseInt(Math.random(0, 1) * (y + 1), 10);
        console.log('The secret number chosen from the array is: ' + chosen);
        if (calc(x, y) === false) {
            console.log(arr);
        }
    };

    // run app with initial paramters, min & max
    run(0, 300);

}());
