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