/***********************************************************************
Write a function called `keysInObject(obj)` that takes in an object and returns
an array of all the keys within that Object.

Do this once using using a `for...in` loop and once using `Object.keys`.

Examples:

let animals = {dog: 'Wolfie', cat: 'Jet', bison: 'Bilbo'}
let foods = {apple: 'tart', lemon: 'sour', mango: 'sweet'}
keysInObject(animals); // => ["dog", "cat", "bison"]
keysInObject(foods); // => ["apple", "lemon", "mango"]
***********************************************************************/

/*function keysInObject(obj) {

  //create empty array
  let ansArr = [];

  //loop through obj
  for (let key in obj) {

  //send key to array
  ansArr.push(key);

  }

  //return array
  return ansArr;

}*/
let keysInObject = (obj) => {

   //create an empty array
   let ansArr = [];

  //use obj.kys and frEch to loop through obj
  Object.keys(obj).forEach((key) => {

    ansArr.push(key);

  });

  return ansArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keysInObject;
