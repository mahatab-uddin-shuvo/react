import React, { Component } from "react";
export const ContactContext = React.createContext();
//will take existing state
//modify and return based on action 
const reducer = (state,action) =>{
  if(action.type === 'ADD_COUNT'){
    return{
      ...state,
      count:state.count+action.payload,
    }
  }
}
console.log(reducer({count:0, counting:false},{type:'ADD_COUNT',payload:1}));

export class ContactProvider extends Component {
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
          contact.id === updateContact.id ? (contact = updateContact) : contact
        );
        this.setState({
          contacts: updatedContacts,
          selectedContact: null,
        });
        console.log(updateContact);
      };
    
  render() {
    return (
      <ContactContext.Provider value={{ 
          state:this.state,
          addContact:this.addContact,
          editContact:this.editContact,
          deleteContact:this.deleteContact,
          updateContact:this.updateContact
       }}>
        {this.props.children}
      </ContactContext.Provider>
    );
  }
}
