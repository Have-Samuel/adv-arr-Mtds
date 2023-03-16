// // ForEach Method
// const colors = ['teal', 'red', 'green', 'magenta'];

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }

// forEach(colors, (colors, i) => {
//   console.log(colors.toUpperCase(), 'at inidex of', i);
// });

// colors.forEach(colors, (i) => {
//   console.log(colors.toUpperCase(), 'at inidex of', i);
// });

// // Mapping on Numbers
// const numbers = [21, 32, 54, 78, 89, 109];
// const negatives = numbers.map((num) => num * -1);

// // Mapping on Strings
// const todos = [
//   {
//     id: 1,
//     text: 'Walk the Dog!',
//     priority: 'High',
//   },
//   {
//     id: 1,
//     text: 'Walk the Cat!',
//     priority: 'Medium',
//   },
//   {
//     id: 1,
//     text: 'Walk the Chickens!',
//     priority: 'Low',
//   },
//   {
//     id: 1,
//     text: 'Clean the Garage!',
//     priority: ' Very High',
//   },
// ];

// const todoText = todos.map((todo) => todo.text);

// // Mapping on Links
// const links = Array.from(document.querySelectorAll('a'));

// const urls = links.map((a) => a.href);

// // My own mapping
// function myMap(arr, callback) {
//   const mappedArray = [];
//   for (let i = 0; i < arr.length; i + 1) {
//     const val = callback(arr[i], i, arr);
//     mappedArray.push(val);
//   }
//   return mappedArray;
// }

// const priorityMap = myMap(todos, function(todo) {
//   return todo.priority;
// });

// const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function(str, idx) {
//   return str.repeat(idx);
// });

// Filters
// const words = [
//   'immunoelectrophoretically',
//   'rotavator',
//   'tsktsk',
//   'psychophysicotherapeutics',
//   'squirrelled',
//   'crypt',
//   'uncopyrightable',
//   'cysts',
//   'pseudopseudohypoparathyroidism',
//   'unimaginatively',
// ];

// Alternative way to write the filter function
// words.filter((word) => {
//   if (word.length >= 20) {
//     return true;
//   }
//   return false;
// });

// const longWords = words.filter((word) => word.length > 20);

// // finding words that start with letters c & u
// const cWOruWords = words.filter((w) => w[0] === 'u' || w[0] === 'c');

// const containsVowel = function (word) {
//   for (const char of word) {
//     if (isVowel(char)) return true;
//   }
//   return false;
// };

// const isVowel = (char) => 'aeiou'.indexOf(char) !== -1;

// const containVowels = words.filter(containsVowel);

// const noVowels = words.filter((word) => !containsVowel(word));

// // Applying Filter and Map mto the DOM
// const allCheckboxes = document.querySelectorAll('input[type=checkbox]');

// const checked = Array.from(allCheckboxes).filter((box) => box.checcked);

// // Get the inner Text of the checked boxes
// const completedItems = checked.map((checkbox) => checkbox.parentElement.innerText);

// // Combining the two upper steps
// function extractCompletedTodos() {
//   const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
//   return Array.from(allCheckboxes).filter((box) => box.checcked)
//     .checked.map((checkbox) => checkbox.parentElement.innerText);
// }

// // Writing Filter
// function myFilter(arr, callback) {
//   const filteredArray = [];
//   for (let i = 0; i < arr.length; i + 1) {
//     if (callback(arr[i], i, arr)) {
//       filteredArray.push(arr[i]);
//     }
//   }
//   return filteredArray;
// }

// // Let's get short words
// const shorties = myFilter(words, function(word) {
//   return word.length <= 10;
// });

// // Getting the other words (odd words)
// const everyOtherword = myFilter(words, function(word, i) {
//   return 1 % 2 === 0;
// })


// // FOR EACH
// function doubleValues(arr) {
//   const newArr = [];
//   arr.forEach(function(num) {
//     newArr.push(num * 2);
//   });
//   return newArr;
// }

// // ONLY EVEN VALUES
function onlyEvenValues(arr) {
  const newArr = [];
  arr.forEach(function(val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}
