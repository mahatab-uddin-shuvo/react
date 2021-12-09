import React, { Component } from "react";

class ContactForm extends Component {

  constructor(){
    super();
    this.firstName = React.createRef()
    this.lastName = React.createRef()
    this.email = React.createRef()
    this.profession = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const myValue = {
     firstName:this.firstName.current.value,
     lastName:this.lastName.current.value,
     email:this.email.current.value,
     profession:this.profession.current.value
    }
    console.log(myValue)
  };

  render() {
    return (
      <>
        <h4>Contact Form</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              ref={this.firstName}
              name="firstName"
              defaultValue="Mahatab Uddin"
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              ref={this.lastName}
              name="lastName"
              defaultValue="Shuvo"

            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              ref={this.email}
              name="email"
              defaultValue="shuvo@gmail.com"

            />
          </div>
          <div className="input-field">
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              ref={this.profession}
              name="profession"
              defaultValue="Software Engineer"
            />
          </div>
          
          <button className="waves-effect waves-light btn" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
