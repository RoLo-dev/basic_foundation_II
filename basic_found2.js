// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function biggie(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'big';
        }
    }
    return arr;
}

// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr){
    let high = -Infinity;
    let low = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > high){
            high = arr[i];
        }
        if(arr[i] < low){
            low = arr[i];
        }
    }
    console.log("Low is equal to " + low);
    return high;
}

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function oneAnother(arr){
    secondLast = arr[arr.length-2];
    odd = arr[1];
    console.log("Second last value is " + secondLast);
    return odd;
}
// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubled(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function positive(arr){
    let countP = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            countP++;
            arr[arr.length-1] = countP;
        }
    }
    return arr;
}

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensAndOdds(arr){
    let evens = 0;
    let odds = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%2===0){
            evens++;
            if(evens === 3){
                console.log("Even more so!");
            }
        }
        if(arr[i]%2===1){
            odds++;
            if(odds === 3){
                console.log("That's odd!");
            }
        }
    }
}

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function increment(arr){
    for(let i = 0; i < arr.length; i++){
        if(i%2 === 1){
            arr[i] = arr[1] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function prevLengths(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr[i] = arr[arr.length-1];
    }
    for (var b = 1, r = 0; b < arr.length; b++, r++) {
        arr[b] = newArr[r];
    }
    return arr;
}

// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArray(arr){
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function allNeg(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(-Math.abs(arr[i]));
    }
    return newArr;
}

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function hungry(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'food'){
            console.log('yummy');
        } else{
            sum++;
        }
        if(sum == arr.length){
            console.log('I\'m hungry');
        }
    }
}

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

let arr1 = [true,42,"Ada",2,"pizza"];
let arr2 = [1,2,3,4,5,6];

function swap(arr){
    let temp = arr[0];
    let temp2 = arr[2];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    arr[2] = arr[arr.length-3];
    arr[arr.length-3] = temp2;
};
console.log(swap(arr2));


// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(arr, num){
    for(let i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}