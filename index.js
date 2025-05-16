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

const parentClick = () => {
  alert("Parent click");
};

const childClick = (event) => {
  alert("child click");
  event.stopPropagation();
};
