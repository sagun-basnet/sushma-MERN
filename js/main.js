// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(i);
// function myFun(a, b) {
//   return a + b;
// }

// const myFun = (a, b) => a + b;

// console.log(myFun(1, () => {}));

// let arr = [1, 2, 3, 4, 56, 15, "asdf", [3, 4, 5, 6], null, undefined];
// arr.unshift(100);
// // arr.pop();

// console.log(arr);

// arr.map((value, index) => {
//   console.log(value + " index: " + index);
// });

// let api = [
//   {
//     id: 1,
//     name: "jhone",
//     age: 25,
//     email: "jhon@gmail.com",
//     password: "1234567",
//   },
//   {
//     id: 2,
//     name: "jhone",
//     age: 25,
//     email: "jhon@gmail.com",
//     password: "1234567",
//   },
//   {
//     id: 3,
//     name: "jhone",
//     age: 25,
//     email: "jhon@gmail.com",
//     password: "1234567",
//   },
// ];

// api.map((value) => {
//   console.log("ID: " + value.id);
//   console.log("Name " + value.name);
//   console.log("Age: " + value.age);
//   console.log("Email: " + value.email);
// });

// let obj = {
//   name: "jhon",
//   age: 12,
//   address: ["itahari", "dharan"],
//   phone: {
//     num1: "98123412412",
//     num2: "235325345",
//     other: [1, 2, 46, 67],
//   },
// };
// console.log(obj.phone.other[1]);

// let i = 0;
// const myIntervel = setInterval(() => {
//   console.log(i);
//   i++;
//   if (i === 5) {
//     clearInterval(myIntervel);
//   }
// }, 1000);

// try {
//   const myTimeout = setTimeout(() => {
//     console.log("Time out");
//   }, 2000);
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log("finally");
// }

// clearTimeout(myTimeout);

// const name = "jhon";
// const age = 29;
// const address = "bratnagar";
// const phone = "9812343434";

// console.log(
//   "Welcome " +
//     name +
//     "." +
//     " You are " +
//     age +
//     " years old." +
//     "You live in " +
//     address +
//     "." +
//     " Contact number: " +
//     phone
// );

// console.log(
//   `Welcome ${name}. You are ${age} years old. You live in ${address}. Contact number: ${phone}`
// );

// const arr = [1, 2, 5, 7, 89, 0, 4, 6];

// const [first, second, third] = arr;

// console.log(first, second, third);

// const obj = {
//   name: "jhon",
//   email: "jhon@gmail.com",
//   password: "123456789",
//   phone: "98123243242",
// };

// const { name, email, phone, password } = obj;

// const myFun = ({name}) => {

// };
// myFun(obj);
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 0];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const arr3 = [1,2,3,4,5,6,7,8,9,0]

// const arr = [1, 2, 5, 7, 89, 0, 4, 6];
// const [first, second, third, ...others] = arr;

// console.log(...arr);

// console.log(others);

// let obj = {
//   name: "jhon",
//   email: "jhon@gmail.com",
//   password: "123456789",
//   phone: "98123243242",
// };

// obj.name = "deo";

// console.log(obj);

// const obj2 = obj;
// console.log(obj2);

// const { password, ...res } = obj;
