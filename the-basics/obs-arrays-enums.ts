// const person: {
//   name: string; 
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'John',
//   age: 25,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// make this better with enums

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'John',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role[1] = 10; // Error because of tuple
// person.role = [0, 'admin', 'user']; // Error, New array has to have same structure

let favoriteActivities: string[];
// favoriteActivities = 'Sports'; //Error
favoriteActivities = ['Sports', 'Traveling']

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
}