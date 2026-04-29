const getAdultUserNames = (users) => {
    return users
        .filter(({ age }) => age > 18)
        .map(({ name }) => name)
        .sort();
};
// Example usage
const users = [
  { name: "Adnan", age: 20 },
  { name: "Ali", age: 25 },
  { name: "Raju", age: 19 }
];

console.log(getAdultUserNames(users));