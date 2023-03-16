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

// doubleValues([1,2,3]) // [2,4,6]
// doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

// // ONLY EVEN VALUES
// function onlyEvenValues(arr) {
//   const newArr = [];
//   arr.forEach(function(val) {
//     if (val % 2 === 0) {
//       newArr.push(val);
//     }
//   });
//   return newArr;
// }

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]

// // SHOW FIRST AND LAST
// function showFirstAndLast(arr) {
//   const newArr = [];
//   arr.forEach(function(num) {
//     arr.push (num[0] + num[num.length - 1]);
//   });
//   return newArr;
// }
// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
// showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

// // ADD KEY AND VALUE
// function addKeyAndValue(arr, key, value) {
//   arr.forEach((val) => {
//     val[key] = value;
//   });
//   return arr;
// }

// addKeyAndValue(
//   [
//     { name: 'Elie' },
//     { name: 'Tim' },
//     { name: 'Matt' },
//     { name: 'Colt' },
//   ],
//   'title',
//   'instructor',
// );

// /*
//     [
//       {name: 'Elie', title:'instructor'},
//       {name: 'Tim', title:'instructor'},
//       {name: 'Matt', title:'instructor'},
//       {name: 'Colt', title:'instructor'}
//     ]
//   */

// // VOWEL COUNT
function vowelCount(str) {
  const splitArr = str.split('');
  const obj = {};
  const vowels = 'aeiou';

  splitArr.forEach((letter) => {
    const lowerCasedLetter = letter.toLowercase();
    if (vowels.indexOf(lowerCasedLetter) !== -1) {
      if (obj[lowerCasedLetter]) {
        obj[lowerCasedLetter]++;
      } else {
        obj[lowerCasedLetter] = 1;
      }
    }
  });
  return obj;
}
console.log(vowelCount('Have'));

// // MAP
function doubleValuesWithMap(arr) {
  return arr.map((num) => num * 2);
}

// doubleValuesWithMap([1,2,3]) // [2,4,6]
// doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

// // VAL TIMES INDEX
function valTimesIndex(arr) {
  return arr.map((val, idx) => val * idx);
}

valTimesIndex([1, 2, 3]); // [0,2,6]
valTimesIndex([1, -2, -3]); // [0,-2,-6]

// // EXTRACT KEY
function extractKey(arr, key) {
  return arr.map(function(val) {
    return val[key];
  });
}

// extractKey(
//   [
//     {name: 'Elie'},
//     {name: 'Tim'},
//     {name: 'Matt'},
//     {name: 'Colt'}
//   ],
//   'name'
// )

// ['Elie', 'Tim', Matt', 'Colt']

// // EXTRACT FULL NAME
function extractFullName(arr) {
  arr.map(function(val) {
    return val.first + ' + ' +val.last;
  });
  return arr;
}

/*
extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
])

  // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

// // FILTER
// filterByValue
function filterByValue(arr, key) {
  return arr.filter(function(val, idx) {
    return val[key] !== undefined;
  });
}

// filterByValue(
//   [
//     { first: 'Elie', last: 'Schoppik' },
//     { first: 'Tim', last: 'Garcia', isCatOwner: true },
//     { first: 'Matt', last: 'Lane' },
//     { first: 'Colt', last: 'Steele', isCatOwner: true }
//   ],
//   'isCatOwner'
// );

/*
    [
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ]
  */

// // FIND
function find(arr, searchValue) {
  return arr.filter(function(val) {
    return vaal === searchValue;
  })[0];
}

// find([1,2,3,4,5], 3) // 3
// find([1,2,3,4,5], 10) // undefined

// // FIND IN OBJECT
function findInObj(arr, key, searchValue) {
  return arr.filter(function(val) {
    return val[key] === searchValue;
  })[0];
}

// findInObj(
//   [
//     {first: 'Elie', last:"Schoppik"},
//     {first: 'Tim', last:"Garcia", isCatOwner: true},
//     {first: 'att', last:"Lane"},
//     {first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner',
//   true
// )

// {first: 'Tim', last:"Garcia", isCatOwner: true}

// // REMOVE VOWELS
function removeVowels(str) {
  const vowels = 'aeiou';
  return str.toLowercase().split('').filter(function(val) {
    return vowels.indexOf(val) === -1;
  }).join('');
}

// removeVowels('Elie') // ('l')
// removeVowels('TIM') // ('tm')
// removeVowels('ZZZZZZ') // ('zzzzzz')

// // DOUBLE ODD NUMBERS => MAP
// function doubleOddNumbers(arr) {
//   return arr.filter(function(val) {
//     return val % 2 !== 0; // odd
//     }).map(function(val) {
//       return val * 2;
//     });
// }

// // DOUBLE ODD NUMBERS => FILTER
function doubleOddNumbers(arr) {
  return arr.filter(function(val) {
    if (val % 2 !== 0) {
      return val * 2;
    }
  });
}

// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
// doubleOddNumbers([4,4,4,4,4]) // []