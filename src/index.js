import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App'
import Add,{Sub, Multiply, num1, num2} from './Playground/Math'


console.log(Add(num1,num2))
console.log(Sub(num1,num2))
console.log(Multiply(num1,num2))

//Rendering in DOM
ReactDOM.render(<App />, document.getElementById("root"));
