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

let promise = new Promise(function (resolve, reject) {
  let condition = true;

  if (condition == true) {
    resolve("This is resolved");
  } else {
    reject("This is rejected");
  }
});

promise.then((res) => {
  console.log("Sucsess :", res);
});

promise.catch((err) => {
  console.log("Error", err);
});
