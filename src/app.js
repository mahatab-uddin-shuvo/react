import React from "react";
import ReactDOM from "react-dom";

// import Friends from './Component/Friends';
// import Greetings from "./Component/Greetings";
// import Origin from "./Component/Origin";
import Homepage from "./Component/Homepage";
//functional base component
// const Greetings = () => {
//   return (
//     <div>
//       <h1>Hello React</h1>
//     </div>
//   )
// }
//ClassBase Component
// class App1 extends Component{
//   constructor(){
//     super();
//   }
//  render(){
//    return <h1>Hello Man</h1>
// }
// }

const App = () => {
  return (
    <>
 
      <Homepage />
      
      
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
