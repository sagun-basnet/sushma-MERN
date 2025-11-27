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

let i = 0;
// const myIntervel = setInterval(() => {
//   console.log(i);
//   i++;
//   if (i === 5) {
//     clearInterval(myIntervel);
//   }
// }, 1000);

const myTimeout = setTimeout(() => {
  console.log("Time out");
}, 2000);

clearTimeout(myTimeout);
