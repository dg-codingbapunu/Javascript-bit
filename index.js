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
// const childId = document.getElementById("parent");

// const parentClick = () => {
//   alert("Parent click");
// };

// const childClick = (event) => {
//   alert("child click");
//   event.stopPropagation();
// };

// parentId.addEventListener("click", parentClick, true);
// childId.addEventListener("click", childClick, true);
