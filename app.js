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
const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' },
];

// Removes a user from the array of users
// Returns the removed user or undefined if no user was removed
function removeUser(usersArray, username) {
  const foundIndex = usersArray.findIndex((user) => user.username = username);
  if (foundIndex === -1) return;
  return usersArray.splice(foundIndex, 1)[0];
}

// Spread Operator
const nums = [4, 5, 6, 78, 43, 56];
Math.max(nums); // NaN
Math.max(...nums); // 78

// Filter by Type
const filterByType = (type, ...vals) => vals.filter((val) => typeof (val) === type);
// If we have function and we want to filter by type, we can use the typeof operator
const things = ['dog', 4, 'cat', 2, undefined, 'boolean', 'fish', 1, true, false];

filterByType('number', ...things); // [4, 2, 1]
filterByType('string', ...things); // ['dog', 'cat', 'fish']
filterByType('boolean', ...things); // [true, false]
filterByType('undefined', ...things); // [undefined]

// In javascript, a string is a spreadable object
console.log(things); // ['dog', 4, 'cat', 2, undefined, 'boolean', 'fish', 1, true, false]
console.log(...things); // dog 4 cat 2 undefined boolean fish 1 true false
console.log(...'hello'); // h e l l o
console.log('hello'); // hello

// Using spread Operator on array laterals
const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

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

// Using different functions to create one array
const greenTeas = ['birch', 'pine', 'cedar'];
const oolongTeas = ['daisy', 'rose', 'lily'];
const herbalTeas = ['chamomile', 'mint', 'lemon balm'];
const coffees = ['espresso', 'cappuccino', 'latte'];

const allteas = [...greenTeas, ...oolongTeas, ...herbalTeas];
// ['birch', 'pine', 'cedar', 'daisy', 'rose', 'lily', 'chamomile', 'mint', 'lemon balm']

// Adding another tea from any other array
const allTeas2 = [...greenTeas, ...oolongTeas, 'jasmine', ...herbalTeas, 'peppermint'];
// ['birch', 'pine', 'cedar', 'daisy', 'rose', 'lily',
// 'jasmine', 'chamomile', 'mint', 'lemon balm', 'peppermint']

// We can spread other iterables like strings
const allTeas3 = [...greenTeas, ...oolongTeas, 'jasmine', ...herbalTeas, 'peppermint', ...'green tea'];
// ['birch', 'pine', 'cedar', 'daisy', 'rose', 'lily',
// 'jasmine', 'chamomile', 'mint', 'lemon balm',
// 'peppermint', 'g', 'r', 'e', 'e', 'n', ' ', 't', 'e', 'a']

// Another way to spread strings
const vowels = 'aeiou';
const allVowels = [...vowels];
// ['a', 'e', 'i', 'o', 'u']

// Another way to spread strings
const vowels2 = 'aeiou';
vowels2.split('');
// ['a', 'e', 'i', 'o', 'u']

// Spreading an Object in an Array or into a Function call
const tea = {
  type: 'oolong',
  name: 'Winter Sprout',
  origin: 'Taiwan',
};

// const arr = [...tea];
// // TypeError Tea is not iterable
// for (const y of tea) {
//   console.log(y);
// }
// // TypeError Tea is not iterable

// A copy of tea
// const tea2 = { ...tea };
//  {
//   type: 'oolong',
//   name: 'Winter Sprout',
//   origin: 'Taiwan',
// };

// But tea === tea2 => false

// We can add and copy properties
const teaTin = { ...tea, price: 9.54 };
//  {
//   type: 'oolong',
//   name: 'Winter Sprout',
//   origin: 'Taiwan',
//  price: 9.54
// };

// We can also change properties
const newTea = { ...tea, name: 'Golden Frost' };
//  {
//   type: 'oolong',
//   name: 'Golden Frost' ===> Name changes
//   origin: 'Taiwan',
//  price: 9.54
// };

const newTea = { name: 'Golden Frost', ...tea };
//  {
//   type: 'oolong',
//   name: 'Winter Sprout', ===> Name doesn't changes
//   origin: 'Taiwan',
//  price: 9.54
// };