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

// Map
const numbers = [21, 32, 54, 78, 89, 109];
const negatives = numbers.map((num) => num * -1);

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

const todoText = todos.map((todo) => {
  return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));

const urls = links.map(function(a) {
  return a.href;
});
