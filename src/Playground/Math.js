const num1 = 7;
const num2 = 5;

function Add (num1, num2)  {
  return num1+num2;
};

function Sub (num1, num2)  {
    return num1-num2;
};

function Multiply (num1, num2)  {
    return num1*num2;
};


export { Add as default, Sub, Multiply, num1, num2 };
