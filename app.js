const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

let total = 0;
// for (const num of nums) {
//   total += num;
// }
for (let i = 0; i < nums.length; i++) {
  total += nums[i];
}
console.log(total);

// findig the Min value
let min = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < min) min = nums[i];
}
console.log(min);

// fincding the number of char per letter
const str = 'lollapalooza';
const charFreq = {};
// for (let char of str) {
//   if (charFreq[char]) {
//     charFreq[char] += 1;
//   } else {
//     chaeFreq[char] = 1;
//   }
// }
for (let i = 0; i < str.length; i++) {
  if (charFreq[str[i]]) {
    charFreq[str[i]] += 1;
  } else {
    charFreq[str[i]] = 1;
  }
}

// REDUCE METHOD
// reduce method takes in a callback function
// the callback function takes in two arguments
// the first argument is the accumulator
// the second argument is the current value
// the reduce method returns a single value
// the reduce method takes in an optional second argument
// the second argument is the initial value of the accumulator

// Using the reduce method to find the sum of an array
const digits = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];
const result = digits.reduce((accum, currVal) => {
  console.log(accum, currVal);
  return accum + currVal;
});

// Using Reduce to find the one word string
const words = ['lollapalooza', 'is', 'the', 'best'];
const output = words.reduce((accum, currVal) => {
  console.log(accum, currVal);
  return `${accum} ${currVal}`;
});

// Finding the min value using reduce
const numbers = [70, 88, 93, 94, 64, 62, 56];
const liveNum = numbers.reduce((min, nextScore) => {
  if (nextScore < min) {
    return nextScore;
  }
  return min;
});

// Using tanery operator
const minScore = numbers.reduce((min, nextScore) => (nextScore < min ? nextScore : min));

const maxScore = numbers.reduce((max, nextScore) => (nextScore > max ? nextScore : max));

// Adding the second parameter to the reduce method
const minMidtermScore = midtermScore.reduce((min, nextScore) => (nextScore < min ? nextScore : min));

const maxMidtermScore = midtermScore.reduce((max, nextScore) => (nextScore > max ? nextScore : max));

const midtermScore = [75, 68, 43, 60, 54, 72, 56];
const finalScore = [89, 92, 83, 88, 94, 90, 76];

// const minFinalsScore = finalScore.reduce((min, nextScore) => (nextScore < min ? nextScore : min));

const minOverallScore = finalScore.reduce((min, nextScore) => (nextScore < min ? nextScore : min), minMidtermScore);

// Returns a new array with the value of each object at the key.
function extraValue(arr, val) {
  return arr.reduce((accum, nextKey) => {
    accum.push(nextKey[val]);
    return accum;
  }, []);
}
// const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
// extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

// Returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in the string.
function vowelCount(str) {
  const vowels = 'aeiou';
  return str.split('').reduce((accum, nextVowel) => {
    const lowerCased = nextVowel.toLowerCase();
    if (vowels.indexOf(lowerCased) !== -1) {
      if (accum[lowerCased]) {
        accum[lowerCased]++;
      } else {
        accum[lowerCased] = 1;
      }
    }
    return accum;
  }, {});
}
console.log(vowelCount('Elie')); // {e:2,i:1};
vowelCount('Tim'); // {i:1};
vowelCount('Matt'); // {a:1})
vowelCount('hmmm'); // {};
vowelCount('I Am awesome and so are you'); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// addKeyAndValue function
const arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }];

function addKeyAndValue(arr, key, value) {
  return arr.reduce((accum, nextKey, index) => {
    accum[index][key] = value;
    return accum;
  }, arr);
}

addKeyAndValue(arr, 'title', 'Instructor') //
  [
    { title: 'Instructor', name: 'Elie' },
    { title: 'Instructor', name: 'Tim' },
    { title: 'Instructor', name: 'Matt' },
    { title: 'Instructor', name: 'Colt' }
  ];