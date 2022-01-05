import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ContactForm from "./Sample/ContactForm";
import EditContact from "./Sample/EditContact";
import Contacts from "./Sample/Contacts";
import Header from "./Sample/Header";
import Contact from "./Sample/Contact";
import About from "./Sample/About";
import NotFound from "./Sample/NotFound";
import { ContactContext } from "../Contexts/ContactContext";
// import Game from "./Sample_4/Game";
// import CounterTask from "./Sample_1/CounterTask";
// import CounterAlt from "./Sample_2/CounterAlt";
// import Friends from './Component/Friends';
// import Greetings from "./Greetings";
// import Origin from "./Component/Origin";
// import Homepage from "./Sample_3/Homepage";
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

// const App = () => {
//   return (
//     <>

//     </>
//   );
// };

// const App = ()=>{
//   return(
//     <Game />
//   )
// }
class App extends Component {
  static contextType = ContactContext;

  render() {
    const { selectedContact } = this.context.state;
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/add" element={<ContactForm />} />
          <Route
            path="/edit/:id"
            element={
              <>{selectedContact ? <EditContact /> : <Navigate to="/" />}</>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
