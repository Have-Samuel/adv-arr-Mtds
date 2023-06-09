/* eslint-disable no-restricted-syntax */
// indUserByUserName
// const users = [
//   { username: 'mlewis' },
//   { username: 'akagen' },
//   { username: 'msmith' },
// ];

// function findUserByUserName(usersArray, username) {
//   return usersArray.find((user) => user.username = username);
// }

// findUserByUsername(users, 'mlewis'); // {username: 'mlewis'}
// findUserByUsername(users, 'taco'); // undefined

// removeUser
// const users = [
//   { username: 'mlewis' },
//   { username: 'akagen' },
//   { username: 'msmith' },
// ];

// // Removes a user from the array of users
// // Returns the removed user or undefined if no user was removed
// function removeUser(usersArray, username) {
//   const foundIndex = usersArray.findIndex((user) => user.username = username);
//   if (foundIndex === -1) return;
//   return usersArray.splice(foundIndex, 1)[0];
// }

// // Spread Operator
// const nums = [4, 5, 6, 78, 43, 56];
// Math.max(nums); // NaN
// Math.max(...nums); // 78

// // Filter by Type
// const filterByType = (type, ...vals) => vals.filter((val) => typeof (val) === type);
// // If we have function and we want to filter by type, we can use the typeof operator
// const things = ['dog', 4, 'cat', 2, undefined, 'boolean', 'fish', 1, true, false];

// filterByType('number', ...things); // [4, 2, 1]
// filterByType('string', ...things); // ['dog', 'cat', 'fish']
// filterByType('boolean', ...things); // [true, false]
// filterByType('undefined', ...things); // [undefined]

// // In javascript, a string is a spreadable object
// console.log(things); // ['dog', 4, 'cat', 2, undefined, 'boolean', 'fish', 1, true, false]
// console.log(...things); // dog 4 cat 2 undefined boolean fish 1 true false
// console.log(...'hello'); // h e l l o
// console.log('hello'); // hello

// // Using spread Operator on array laterals
// const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette;
// // ['lavender berry', 'sunflower yellow', 'orchid orange']

// palette; // ['lavender berry', 'sunflower yellow', 'orchid orange']

// paletteCopy.pop();
// // ['lavender berry', 'sunflower yellow']
// paletteCopy
// // ['lavender berry', 'sunflower yellow']
// palette
// // ['lavender berry', 'sunflower yellow']

// To copy an array, we can use slice() => one Way
// const paletteCopy = palette.slice();
// ['lavender berry', 'sunflower yellow', 'orchid orange']
// paletteCopy.pop();
// ['lavender berry', 'sunflower yellow']
// palette;
// ['lavender berry', 'sunflower yellow', 'orchid orange']

// Another way to copy an array is to use the spread operator
// const paletteCopy2 = [...palette];
// ['lavender berry', 'sunflower yellow', 'orchid orange']

// const paletteCopy3 = [...palette, 'green apple '];
// ['lavender berry', 'sunflower yellow', 'orchid orange', 'green apple '] => new array

// const paletteCopy3 = ['sky blue', ...palette, 'green apple '];
// ['sky blue', 'lavender berry', 'sunflower yellow', 'orchid orange', 'green apple '] => new array

// Using another method to copy an array. concat()
// const paletteCopy4 = palette.concat('Magenta');
// ['lavender berry', 'sunflower yellow', 'orchid orange', 'Magenta'] => new array
// palette;
// ['lavender berry', 'sunflower yellow', 'orchid orange'] => original array

// // Using different functions to create one array
// const greenTeas = ['birch', 'pine', 'cedar'];
// const oolongTeas = ['daisy', 'rose', 'lily'];
// const herbalTeas = ['chamomile', 'mint', 'lemon balm'];
// const coffees = ['espresso', 'cappuccino', 'latte'];

// const allteas = [...greenTeas, ...oolongTeas, ...herbalTeas];
// // ['birch', 'pine', 'cedar', 'daisy', 'rose', 'lily', 'chamomile', 'mint', 'lemon balm']

// // Adding another tea from any other array
// const allTeas2 = [...greenTeas, ...oolongTeas, 'jasmine', ...herbalTeas, 'peppermint'];
// // ['birch', 'pine', 'cedar', 'daisy', 'rose', 'lily',
// // 'jasmine', 'chamomile', 'mint', 'lemon balm', 'peppermint']

// // We can spread other iterables like strings
// const allTeas3 = [...greenTeas, ...oolongTeas, 'jasmine',
// ...herbalTeas, 'peppermint', ...'green tea'];
// // ['birch', 'pine', 'cedar', 'daisy', 'rose', 'lily',
// // 'jasmine', 'chamomile', 'mint', 'lemon balm',
// // 'peppermint', 'g', 'r', 'e', 'e', 'n', ' ', 't', 'e', 'a']

// // Another way to spread strings
// const vowels = 'aeiou';
// const allVowels = [...vowels];
// // ['a', 'e', 'i', 'o', 'u']

// // Another way to spread strings
// const vowels2 = 'aeiou';
// vowels2.split('');
// ['a', 'e', 'i', 'o', 'u']

// // Spreading an Object in an Array or into a Function call
// const tea = {
//   type: 'oolong',
//   name: 'Winter Sprout',
//   origin: 'Taiwan',
// };

// // const arr = [...tea];
// // // TypeError Tea is not iterable
// // for (const y of tea) {
// //   console.log(y);
// // }
// // // TypeError Tea is not iterable

// // A copy of tea
// // const tea2 = { ...tea };
// //  {
// //   type: 'oolong',
// //   name: 'Winter Sprout',
// //   origin: 'Taiwan',
// // };

// // But tea === tea2 => false

// // We can add and copy properties
// const teaTin = { ...tea, price: 9.54 };
// //  {
// //   type: 'oolong',
// //   name: 'Winter Sprout',
// //   origin: 'Taiwan',
// //  price: 9.54
// // };

// // We can also change properties
// const newTea = { ...tea, name: 'Golden Frost' };
// //  {
// //   type: 'oolong',
// //   name: 'Golden Frost' ===> Name changes
// //   origin: 'Taiwan',
// //  price: 9.54
// // };

// const newTea = { name: 'Golden Frost', ...tea };
// //  {
// //   type: 'oolong',
// //   name: 'Winter Sprout', ===> Name doesn't changes
// //   origin: 'Taiwan',
// //  price: 9.54
// // };

// // Combining objects in new Objects like in Arrays
// const teaData = {
//   steepTime: '30s',
//   brewTemp: 175,
//   origin: 'Japan'
// }

// const fullTea = { ...tea, ...teaData }

// //  {
// //   type: 'oolong',
// //   name: 'Winter Sprout',
// //   origin: 'Taiwan',
// //  price: 9.54
// //  steepTime: '30s',
// //  brewTemp: 175
// // };

// const fullTea = { ...tea, ...teaData } // => origin is 'Japan'

// //  {
// //   type: 'oolong',
// //   name: 'Winter Sprout',
// //   origin: 'Japan',
// //  price: 9.54
// //  steepTime: '30s',
// //  brewTemp: 175
// // };

// const fullTea = { ...tea, ...teaData, origin: 'China' } // => origin is 'China'
// //  {
// //   type: 'oolong',
// //   name: 'Winter Sprout',
// //   origin: 'China',
// //  price: 9.54
// //  steepTime: '30s',
// //  brewTemp: 175
// // };

// CLONING -> Creating copies of nested Data Structures using the Spread operator
// const shoppingCart = [
//   {
//     name: 'honey orchid',
//     quantity: 2,
//     price: 13.5
//   },
//   {
//     name: 'African solstice',
//     quantity: 4,
//     price: 25.99
//   }
// ]

// const cartCopy = [...shoppingCart];
// // {
// //   name: 'honey orchid',
// //   quantity: 2,
// //   price: 13.5
// // },
// // {
// //   name: 'African solstice',
// //   quantity: 4,
// //   price: 25.99
// // }

// // shoppingCart === cartCopy => false

// shoppingCart[0]
// // {
// //   name: 'honey orchid',
// //   quantity: 2,
// //   price: 13.5
// // }

// cartCopy[0]
// // {
// //   name: 'honey orchid',
// //   quantity: 2,
// //   price: 13.5
// // }

// shoppingCart[0] === cartCopy[0]
// // true

// cartCopy.quantity = 99;
// // 99
// cartCopy // ===> this update on properties changes the original => shoppingCart
// // {
// //   name: 'honey orchid',
// //   quantity: 99,
// //   price: 13.5
// // }
// shoppingCart
// // {
// //   name: 'honey orchid',
// //   quantity: 99,
// //   price: 13.5
// // }

// // Refactoring1
// function filterOutOdds() {
//   const nums = Array.prototype.slice.call(arguments);
//   return nums.filter((num) => num % 2 === 0);
// }
// // Refactored
// const filterOutOds = (...args) => args.filter((num) => num % 2 === 0);

// // FindMin using Rest
// // function findMin(...nums) {
// //   return Math.min(...nums);
// // } // => 1
// const findMin = (...nums) => Math.min(...nums);
// findMin(1, 4, 12, -3); // -3
// findMin(1, -1); // -1
// findMin(3, 1); // 1

// // FindMin using Rest
// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
// // => { a: 1, b: 2, c: 3, d: 4 }

// // Double and return args
// const doubleAndReturnArgs = (arr, ...nums) => ([...arr, ...nums.map((num) => num * 2)]);

// doubleAndReturnArgs([1, 2, 3], 4, 4); // [2, 4, 6, 8, 8]
// doubleAndReturnArgs([2], 10, 4); // [4, 20, 8]

// /** remove a random element in the items array
// and return a new array without that item. */
// // Slice and Dice1
// const removeRandom = (items) => {
//   const randomIdx = Math.floor(Math.random() * items.length);
//   return [...items.slice(0, randomIdx), ...items.slice(randomIdx + 1)];
// };
// removeRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 10]
// removeRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Slice and Dice2
// // Return a new array with every item in array1 and array2.
// const newArray = (arr1, arr2) => [...arr1, ...arr2];
// return newArray([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// // Slice and Dice3
// // Return a new object with all the keys and values
// // from obj and a new key/value pair
// function addKeyVal(obj, key, val) {
//   const newObj = [...obj];
//   newObj[key] = val;
//   return newObj;
// }

// // Slice and Dice4
// function removeVal(obj, key) {
//   const newObj2 = { ...obj };
//   delete newObj2[key];
//   return newObj2;
// }

// // Slice and Dice5
// // Combine two objects and return a new object
// function combine(obje1, obje2) {
//   return { ...obje1, ...obje2 };
// }

// // Slice and Dice6
// // Return a new object with a modified key and value.
// function update(object, key, val) {
//   // return { object [key] : [val] }
//   const newerObj = { ...object };
//   newerObj[key] = val;
//   return newerObj;
// }
// short hand Property Names
// function makePerson(firstName, LastName, age) {
//   return {
//     firstName,
//     LastName,
//     age,
//     isAlive: true,
//   };
// }
// makePerson('Have', 'Sam', '36');

// // Shorthand Methods
// const mathStuff = {
//   y: 200,
//   add(w, k) {
//     return w + k;
//   },
//   sbutract(o, p) {
//     return o - p;
//   },
// };
// mathStuff('add', 2, 3); // 5
// mathStuff('subtract', 5, 2); // 3

// // computered Properties
// // const color = {
// //   periwinkle: '9c88ff',
// //   '9c88ff': 'periwinkle',
// // };

// // function makeColor(name, hex) {
// //   return {
// //     name: hex,
// //     hex: name
// //   };
// // }

// // Earlier Version
// // function makeColor(name, hex) {
// //   const color = {};
// //   color[name] = hex;
// //   color[hex] = name;
// //   return color;
// // }

// // Computed Property Names Version
// function makeColor(name, hex) {
//   return {
//     [name]: hex,
//     [hex]: name
//   }
// }

// const mystery = {
//   [4 * 2]: 'Eight',
// };
// // {8: 'Eight'}

// const obj = {};
// obj[40 * 2] = 'hello';
// // {80: 'hello'}

// // REFACTORING
// Same keys and values
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

// const createInstructor = (firstName, lastName) => ({ firstName, lastName });
// function createInstructor(firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//   };
// }

// createInstructor('Have', 'Peace');

// // COMPUTED PROPERTY NAMES
// // Earlier Version
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

// ES2015 Version
// let favoriteNumber = 42;

// const instructor = {
//   firstName: 'Colt',
//   [favoriteNumber]: 'That is my favorite!';
// };

// EARLIER VERSION
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// ES2015 VERSION
// const instructor = {
//   firstName: 'Colt',
//   sayHi() {
//     return 'Hi';
//   },
//   sayBye() {
//     return `${this.firstName} says bye!`;
//   },
// };
// CREATE ANIMAL FUNCTION
// EARLIER VERSION
// const d = createAnimal('dog', 'bark', 'Woooof!');
// // {species: "dog", bark: ƒ}
// d.bark(); // "Woooof!"

// const s = createAnimal('sheep', 'bleet', 'BAAAAaaaa');
// // {species: "sheep", bleet: ƒ}
// s.bleet(); // "BAAAAaaaa"

// function createAnimal(species, verb, noise) {
//   return {
//     species,
//     [verb]() {
//       return noise;
//     },
//   };
// }

// // DESTRUCTURING
// // EARLIER VERSION
// const teaOrder = {
//   variety: 'oolong',
//   // teaName: 'Winter Sprout',
//   origin: 'Taiwan',
//   price: 12.99,
//   hasCaffeine: true,
//   quantity: 3,
//   teaTemp: 600,
// };

// // const price = teaOrder.price;
// // const variety = teaOrder.variety;
// // const quantity = teaOrder.quantity;

// // ES2015 VERSION
// // const { price, variety, quantity } = teaOrder;
// // Using spread operator
// const {
//   price, quantity, teaName, ...details
// } = teaOrder;
// // More destructuring
// // Default values
// const { teaTemp = 900 } = teaOrder;
// *************************************
// RENAME VARIABLES
// *************************************
// const { teaName: Chai = 'Milky' } = teaOrder;
// // milky is the default value\

// *************************************
// MULITPLE OBJECTS
// *************************************
// function checkout(tea) {
//   const { quantity = 1, price } = tea;
//   return quantity * price;
// }

// checkout(teaOrder);

// // Dafault values
// const order1 = {
//   variety: 'green',
//   teaName: 'Winter needle',
//   origin: 'Taiwan',
//   price: 12.99,
//   hasCaffeine: true,
// };

// checkout(order1); // 12.99

// *************************************
// DESTRUCTURING ARRAYS
// *************************************
// const students = [
//   { name: 'Have', gpa: 4.6 },
//   { name: 'Peace', gpa: 4.4 },
//   { name: 'Adrine', gpa: 4.0 },
//   { name: 'Sam', gpa: 3.8 },
//   { name: 'Micheal', gpa: 3.4 },
//   { name: 'John', gpa: 3.2 },
// ];

// const [ topStuent, secondBest, , fourthStudent ] = students;
// topStudent = {name: "Have", gpa: 4.6}
// secondBest = {name: "Peace", gpa: 4.4}
// fourthStudent = {name: "Sam", gpa: 3.8}

// *************************************
// USING SPREAD OPERATOR
// *************************************
// const [ first, ...others ] = students;
// first = {name: "Have", gpa: 4.6}
// others = [{name: "Peace", gpa: 4.4}, {name: "Adrine", gpa: 4},
// {name: "Sam", gpa: 3.8}, {name: "Micheal", gpa: 3.4}, {name: "John", gpa: 3.2}]

// *************************************
// FUNCTION DESTRUCTURING
// *************************************

// const teaOrder1 = {
//   variety: 'oolong',
//   teaName: 'Winter Sprout',
//   origin: 'Taiwan',
//   price: 12.99,
//   hasCaffeine: true,
//   // quantity: 4,
//   teaTemp: 600,
// };
// *************************************
// DESTRUCTURING FUNCTION PARAMETERS
// *************************************

// function getTotal({ quantity: qty = 1, price }) {
//   // const { quantity, price } = tea;
//   return qty * price;
// }

// *************************************
// ANOTHER EXAMPLE
// *************************************
// const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
// const swimMeetResults = ['Japan', 'France', 'Chile'];

// function awardMedals([Gold, Silver, Bronze]) {
//   return {
//     Gold, Silver, Bronze,
//   };
// }

// *************************************
// NESTED DESTRUCTURING
// *************************************
// const movie = {
//   Title: 'Amadeus',
//   Year: '1984',
//   Rated: {
//     rating: 'R',
//     advisory: 'Rated R for brief nudity',
//   },
//   Released: '19 Sept 1984',
//   Runtime: '160 min',
//   Genres: ['Biography', 'Drama', 'History', 'Music'],
//   Director: 'Milos Forman',
//   Writer: 'Peter Shaffer (original stage play), Peter Shaffer (original screenplay)',
//   Actors: 'F Murray Abraham, Tom Hucle, Elizabeth Berridge, Roy Dotrice',
//   Ratings: [
//     { Source: 'Internet Movie Database', Value: '8.3/10' },
//     { Source: 'Rotten Tomatoes', Value: '93%' },
//     { Source: 'Metacritic', Value: '88/100' },
//   ],
//   Versions: [
//     { version: 'Original Release', runtime: 161 },
//     { version: "Director's Cut", runtime: 180 },
//   ],
// };

// // const { Rated } = movie;
// // const { rating, advisory } = Rated;
// // // rating => 'R'
// // // advisory => 'Rated R for brief nudity'

// const { Rated: { rating, advisory: noted } } = movie;

// // const { Ratings: [{ Value }] } = movie;
// // // '8.3/10'
// // *************************************
// // RENAMING VARIABLES WITH DESTRUCTURING
// // *************************************
// const {
//   Ratings: [
//     { Value: Samuel },
//     { Value: Justine }, // nested destructuring
//     { Value: Treasure },
//   ],
//   Versions: [
//     { runtime: myRuntime }, // nested destructuring
//     { runtime: JsRuntime },
//   ],
// } = movie;
// // Samuel '8.3/10'

// // *************************************
// // SWAPPING VARIABLES WITH DESTRUCTURING
// // *************************************
// let hus = 'Samuel';
// let wif = 'Sharlene';

// // EARLIER VERSION
// const mix = hus;
// hus = wif; // hus = 'Sharlene'
// wif = mix; // wif = 'Samuel'

// // ES2015 VERSION WITH DESTRUCTURING
// const both = [hus, wif];
// [hus, wif] = both; // hus = 'Sharlene', wif = 'Samuel'

// // *************************************
// // DESTRUCTURING WITH SWAP SYNTAX
// // *************************************
// [hus, wif] = [wif, hus]; // hus = 'Samuel', wif = 'Sharlene'

// // *************************************
// OBJECT DESTRUCTURING 1
// *************************************
// What is the following code return/print?
// const facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// const { numPlanets, yearNeptuneDiscovered } = facts;

// // console.log(numPlanets); // 8
// // console.log(yearNeptuneDiscovered); // 1846

// // *************************************
// // OBJECT DESTRUCTURING 2
// // *************************************
// // What does the following code return/print?
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };

// let { numPlanets, ...discoveryYears } = planetFacts;

// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// // *************************************
// // OBJECT DESTRUCTURING 3
// // *************************************
// // What does the following code return/print?
// function getUserData({firstName, favoriteColor = 'green'}) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({}); // Your name is undefined and you like green
// getUserData({firstName: 'Have', favoriteColor: 'purple'});
//  // Your name is Have and you like purple
// getUserData({firstName: 'Have'}); // Your name is Have and you like green
// getUserData({favoriteColor: 'purple'}); // Your name is undefined and you like purple

// // *************************************
// // ARRAY DESTRUCTURING 1
// // *************************************
// // What does the following code return/print?
// let [first, second, third, four] = ['Maya', 'Marisa', 'Chi', 'Justine'];

// console.log(first); // Maya
// console.log(second); // Marisa
// console.log(third); // Chi
// console.log(four); // Justine

// // *************************************
// // ARRAY DESTRUCTURING 2
// // *************************************
// // What does the following code return/print?
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
//   'Brown paper packages tied up with strings',
// ];
// console.log(raindrops); // Raindrops on roses
// console.log(whiskers); // whiskers on kittens
// console.log(aFewOfMyFavoriteThings);
// // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// // *************************************
// // ARRAY DESTRUCTURING 3
// // *************************************
// // What does the following code return/print?
// let nums = [29, 90, 89];

// [nums[1], nums[2]] = [nums[2], nums[1]];

// console.log(nums); // [29, 89, 90];

// // *************************************
// // ES2015 REFACTORING
// // *************************************
// // In this exercise, you’ll refactor some ES5 code into ES2015.
// // ES5 Assigning Variables to Object Properties
// var object = {
//   nums: {
//     x: 5,
//     y:4,
//   }
// };
// var x = object.nums.x;
// var y = object.nums.y;

// // ES2015 Object Destructuring
// const object = {
//   nums: {
//     x: 5,
//     y: 4,
//   },
// };
// const { x, y } = object.nums;
// console.log(x, y); // 5 4

// // ***************************
// // ES5 Array Swap
// // ***************************
// var arr = [1, 2];
// var temp = [arr[0]];
// arr[0] = arr[1];
// arr[0] = temp;

// // ES2015 VERSION
// // One-line Array Swap with Destructuring
// const arr = [1,2];
// const temp = arr[0];
// [arr[0], arr[1]] = [arr[1], arr[0]]

// console.log(arr[0]); // 2
// console.log(temp); // 1

// // ***************************
// //RaceResults()
// // ***************************
// // Write a function called raceResults which accepts a single array argument.
// // It should return an object with the keys first, second, third, and rest.
// // first should be the first element in the array,
// //second should be the second element in the array,
// // third should be the third element in the array,
// // and rest should be all other elements in the array.

// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

// // {  first: 'Have',  second: 'Justine',  third: 'Adrine',  rest: ['Walker']}
// raceResults(['Have', 'Justine', 'Adrine', 'Walker']);

// *****************************
// MAPs and SETS
// *****************************
// const myMap = new Map();
// myMap.set(5, 'FIVE');
// myMap.set('5', 'FIVE STRING');

// // To Get the value of a key
// // myMap.get(5) // FIVE
// // myMap.get('5') // FIVE STRING

// // Getting Arrays of Keys and Values
// const emptyArray = [];
// myMap.set(emptyArray, 'Empty Array');
// // myMap.get(emptyArray); // Empty Array

// myMap.set(true, 'TRUEEE!!');

// // *************************************
// // USING FUNCTIONS AS KEYS IN MAPS
// // *************************************
// const sub = (e, t) => e - t;
// const div = (e, t) => e / t;

// const funcCalls = new Map();
// funcCalls.set(sub, 0);
// funcCalls.set(div, 0);

// funcCalls.set(sub, 5); //
// funcCalls.set(div, 6);// 6

// // *************************************
// // USING ARRAYS AS KEYS IN MAPS
// // *************************************
// const beetleArray = [
//   ['The Beatles', 'Sgt. Pepper'],
//   [4, 'Revolver'],
//   ['beatles', 'Abbey Road'],
//   ['Beatles', 'Let It Be'],
//   ['cone', 'Help!'],
//   [9, 'Rubber Soul'],
// ];

// const beetleMap = new Map(beetleArray);
// // beetleMap();
// // Map(6){"The Beatles" => "Let It Be",
// // 4 => "Revolver", "The Beatles" => "Abbey Road",
// // "The Beatles" => "Let It Be", "The Beatles" => "Help!",
// // 9 => "Rubber Soul"}

// // [...beetleMap];
// // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

// beetleMap.set(200, 'FOX-200').set('child', '30-child');

// *************************************
// Has
// *************************************
// beetleMap.has('child'); // true
// beetleMap.has(200); // true
// beetleMap.has('CHILD'); // false
// beetleMap.has(300); // false

// *************************************
// Delete
// *************************************
// beetleMap.delete('child'); // true
// beetleMap.delete(200); // true
// beetleMap.delete('CHILD'); // false
// beetleMap.delete(300); // false

// **************************************
// CLEAR
// **************************************
// beetleMap.clear();
// Clears the whole Map

// *****************************
// Key
// *****************************

// ************************
// ITERATING OVER MAPS
// ************************

// const beetleArray = [
//   ['The Beatles', 'Sgt. Pepper'],
//   [4, 'Revolver'],
//   ['beatles', 'Abbey Road'],
//   ['Beatles', 'Let It Be'],
//   ['cone', 'Help!'],
//   [9, 'Rubber Soul'],
// ];

// const beetleMap = new Map(beetleArray);

// // ITERATING
// // Using forEach
// beetleMap.forEach((val, key) => {
//   console.log(`${key}=>${val}`);
// });

// // FOR OF
// for (const [key, val] of beetleMap) {
//   console.log(`${key} => ${val}`);
// }

// const bannedHashTags = new Set('nofilter', 'justsaying', 'winning', 'yolo');
// Set(8){'n', 'o', 'f', 'i', 'l',…}

// const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
// // ADDING
// bannedHashTags.add('swag');
// // Set(7){"nofilter", "justsaying", "winning", "yolo", "swag"}
// bannedHashTags.add('selfie');
// // Set(8){"nofilter", "justsaying", "winning", "yolo", "swag", "selfie"}
// bannedHashTags.add('bestLife').add('Whatsapp');
// // Set(9){"nofilter", "justsaying", "winning", "yolo", "swag", "selfie", "bestLife", "Whatsapp"}

// // *************************************
// // Has
// // *************************************
// bannedHashTags.has('nofilter'); // true
// bannedHashTags.has('mother'); // false

// // *************************************
// // Delete
// // *************************************
// bannedHashTags.delete('nofilter'); // true
// bannedHashTags.delete('Have'); // false

// // **************************************
// // CLEAR
// // **************************************
// bannedHashTags.clear(); // Set(0){}
// // Clears the whole Set

// // ************************
// ITERATING OVER hashTags and removing duplicates
// ************************
// const filterHashTags = (tags) => {
//   const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
//   return tags.filter((tag) => !bannedHashTags.has(tag));
// };

// const haveTags = ['nofilter', 'justsaying',
// 'winning', 'yolo', 'swag', 'selfie', 'bestLife', 'Whatsapp']; filterHashTags(haveTags);
// filterHashTags(haveTags);
// (4)['swag', 'selfie', 'bestLife', 'Whatsapp']

// // ************************
// // USING INCLUDES
// // ************************
// const filterHashTags = (tags) => {
//   const bannedHashTags = [
//     'nofilter',
//     'justsaying',
//     'winning',
//     'yolo'];
//   return tags.filter((tag) => !bannedHashTags.includes(tag));
// };

// const haveTags = ['nofilter', 'justsaying',
// 'winning', 'yolo', 'swag', 'selfie', 'bestLife', 'Whatsapp']; filterHashTags(haveTags);
// filterHashTags(haveTags);
// // (4)['swag', 'selfie', 'bestLife', 'Whatsapp']

// const ages = [4, 15, 1, 12, 2, 3, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// // new Set(ages);
// // Set(9){4, 15, 1, 12, 2, 3, 9, 8, 7}

// // Usinfg it again as an array
// [...new Set(ages)];

// What does the following code return?
// new Set([1, 1, 2, 2, 3, 4]);
// // {1, 2, 3, 4}

// // What does the following code return?
// [...new Set('referee')].join(''); // removes duplicates
// // 'ref'

// // What does the Map m look like after running the following code?
// const m = new Map();
// m.set([1, 2, 3], true);
// m.set([1, 2, 3], false);

// 0: {Array(3) => true}
// 1: {Array(3) => false}

// Write a function called hasDuplicate which accepts an array
// and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => new Set(arr).size !== arr.length; // removes duplicates

hasDuplicate([1, 3, 2, 1]); // true
hasDuplicate([1, 5, -1, 4]); // false

// *************************************
// VOWELCOUNT
// *************************************
// Write a function called vowelCount which accepts a string and
// returns a map where the keys are numbers and the values are the
// count of the vowels in the string.

function isVowel(char) {
  return 'aeiou'.includes(char);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (const char of str) {
    const lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }