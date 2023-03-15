// ForEach Method
const colors = ['teal', 'red', 'green', 'magenta'];

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

forEach(colors, (colors, i) => {
  console.log(colors.toUpperCase(), 'at inidex of', i);
});

colors.forEach(colors, (i) => {
  console.log(colors.toUpperCase(), 'at inidex of', i);
});

// Mapping on Numbers
const numbers = [21, 32, 54, 78, 89, 109];
const negatives = numbers.map((num) => num * -1);

// Mapping on Strings
const todos = [
  {
    id: 1,
    text: 'Walk the Dog!',
    priority: 'High',
  },
  {
    id: 1,
    text: 'Walk the Cat!',
    priority: 'Medium',
  },
  {
    id: 1,
    text: 'Walk the Chickens!',
    priority: 'Low',
  },
  {
    id: 1,
    text: 'Clean the Garage!',
    priority: ' Very High',
  },
];

const todoText = todos.map((todo) => todo.text);

// Mapping on Links
const links = Array.from(document.querySelectorAll('a'));

const urls = links.map((a) => a.href);

// My own mapping
function myMap(arr, callback) {
  const mappedArray = [];
  for (let i = 0; i < arr.length; i + 1) {
    const val = callback(arr[i], i, arr);
    mappedArray.push(val);
  }
  return mappedArray;
}

const priorityMap = myMap(todos, function(todo) {
  return todo.priority;
});

const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function(str, idx) {
  return str.repeat(idx);
});