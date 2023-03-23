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
