/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(appleObj) {

  //create array of keys and lowercase them
  let lowerKeys = Object.keys(appleObj).map(key => key.toLowerCase());

  //create a counter starting at zero
  let count = 0;

  //loop through keys array
 for (let i = 0; i < lowerKeys.length; i++) {

  //store val in variable
  let key = lowerKeys[i];
  
  //ask if array contains the word apple
  if(key.includes("apple")) {

  //if yes, increment counter
  count++;

  }

}
  //return count
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
