import React, { Component } from "react";

import ContactForm from "./Sample/ContactForm";
import EditContact from "./Sample/EditContact";
import Contacts from "./Sample/Contacts";
import Header from "./Sample/Header";
import Contact from "./Sample/Contact";
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
  state = {
    selectedContact: null,
    contacts: [
      {
        id: 1,
        firstName: "Shuvo",
        lastName: "test",
        email: "shuvo@gmail.com",
        profession: "Developer",
        seletedValue: "personal",
      },
      {
        id: 2,
        firstName: "Khalilur",
        lastName: "Rahamn",
        email: "khalilur@gmail.com",
        profession: "Designer",
        seletedValue: "professional",
      },
      {
        id: 3,
        firstName: "Adnan",
        lastName: "Rahamn",
        email: "adnan@gmail.com",
        profession: "Php Develpoer",
        seletedValue: "professional",
      },
    ],
  };

  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = (id) => {
    // console.log(this.state.contacts.id);
    // console.log(id);
    const updateContact = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: updateContact,
    });
  };

  editContact = (id) => {
    let editContact = this.state.contacts.find((contact) => contact.id === id);
    this.setState({
      selectedContact: editContact,
    });
  };

  updateContact = (updateContact) => {
    const updatedContacts = this.state.contacts.map((contact) =>
      (contact.id === updateContact.id) ? (contact = updateContact) : contact
  );
    this.setState({
      contacts: updatedContacts,
      selectedContact: null,
    });
    console.log(updateContact);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col s4">
            {this.state.selectedContact ? (
              <EditContact
                editContact={this.state.selectedContact}
                updateContact={this.updateContact}
              />
            ) : (
              <ContactForm addContact={this.addContact} />
            )}
          </div>
          <div className="col s8">
            <Contacts
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
              editContact={this.editContact}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
