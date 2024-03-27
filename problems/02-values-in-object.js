/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns
an array of all the values within that Object.


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

/*function valuesInObject(obj) {

  //create an empty array
  let ansArr = [];

  //use for in loop to go through keys of object
  for (let key in obj) {

  //send value to array using key to access object
  ansArr.push(obj[key]);

  }

  //return array
  return ansArr;
}*/

let valuesInObject = (obj) => {

  //create an empty arr
  let ansArr = [];

  //use ob.vls and frEch
  Object.values(obj).forEach((val) => {

  //send values to array
  ansArr.push(val);

  });

  //return arr
  return ansArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
