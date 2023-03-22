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
