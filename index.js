//  closure

// const parent = (y) => {
//   let x = 10;

//   const child = () => {
//     console.log(x + y);
//   };
//   return child;
// };

// const parentResult = parent(5);
// parentResult();

//  event bubling and capturing

// const parentId = document.getElementById("parent");
// const childId = document.getElementById("child");

// const parentClick = () =>
//   alert("Parent click");
// };

// const childClick = (event) => {
//   alert("child click");
// };

// parentId.addEventListener("click", parentClick, true);
// childId.addEventListener("click", childClick, true);

// setTime out && setInterval

// const timeId = setTimeout(() => {
//   console.log("byy bapun");
// }, 3000);

// const timeId2 = setInterval(() => {
//   console.log("byy sinu");
// }, 2000);

// clearInterval(timeId2);

// Call Back Function

// const firstFun = (name, callback) => {
//   setTimeout(() => {
//     console.log(`my name is ${name} `);
//     callback();
//   }, 3000);
// };

// const secondFun = () => {
//   console.log("panda");
// };

// firstFun("Patitapaban", secondFun);

// Promises

// let promise = new Promise(function (resolve, reject) {
//   let condition = true;

//   if (condition == true) {
//     resolve("This is resolved");
//   } else {
//     reject("This is rejected");
//   }
// });

// promise.then((res) => {
//   console.log("Sucsess :", res);
// });

// promise.catch((err) => {
//   console.log("Error", err);
// });

// Async await

// async function myFunction() {
//   let apiCall = await fetch("https://fakestoreapi.com/products/1");
//   const data = await apiCall.json();
//   console.log(data);
// }
// myFunction();

// Map Filter Reduce

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // map

// const newArr = arr.map((item) => {
//   return item * item;
// });
// console.log(newArr);

// // Filter

// const filterArr = arr.filter((item) => {
//   return item % 2 == 0;
// });
// console.log(filterArr);

// // Reduce

// const reduceArr = arr.reduce((prev, next) => {
//   return prev + next;
// });

// console.log(reduceArr);

// Fuction currying

// function multipy(a, b) {
//   return a * b;
// }
// console.log(multipy(2, 3));

// function curryingMulty(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// const result = curryingMulty(5);
// const result2 = result(3);
// console.log(result2(3));

// this keyword
// const Person = {
//   name: "Bapun",
//   age: 22,

//   greet: function () {
//     console.log("Hello Iam " + this.name);
//     console.log("Iam " + this.age + " year old");
//   },
// };
// Person.greet();

// Clousure
const parent = (y) => {
  let x = 10;

  const child = () => {
    console.log(x + y);
  };
  return child;
};

const parentResult = parent(5);
parentResult();
