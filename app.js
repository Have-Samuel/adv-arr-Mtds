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