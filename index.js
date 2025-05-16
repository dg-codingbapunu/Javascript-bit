//  closure

const parent = (y) => {
  let x = 10;

  const child = () => {
    console.log(x + y);
  };
  return child;
};

const parentResult = parent(5);
parentResult();
