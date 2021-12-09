import React, { Component } from "react";
import validator from "validator";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    id:uuidv4(),
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    seletedValue: "personal",
    errors: "",
  };

  // static getDerivedStateFromProps = (props, state) => {
  //   if(props.editContact.id !== state.id){
  //     console.log(props);
  //     return {...props.editContact}
  //   }
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      !validator.isLength(this.state.firstName, { min: 3, max: 10 })
    ) {
      this.setState({
        errors: {
          firstName: "PLease Provide Firstname Should be 3 to 5 character",
        },
      });
      return;
    }

    if (
      this.state.lastName === "" ||
      !validator.isLength(this.state.lastName, { min: 5, max: 10 })
    ) {
      this.setState({
        errors: {
          lastName: "Please Provide lastname Should be 5 to 10 character",
        },
      });
      return;
    }

    if (this.state.email === "" || !validator.isEmail(this.state.email)) {
      this.setState({
        errors: {
          email: "Please Provide valid Email",
        },
      });
      return;
    }
    if (this.state.profession === "") {
      this.setState({
        errors: {
          profession: "Please Provide Profession",
        },
      });
      return;
    }
    // console.log(this.state)
    this.props.addContact(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      profession: "",
      seletedValue: "personal",
      errors: "",
    })

    // console.log(this.props.editContact(this.state))
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      profession,
      seletedValue,
      errors,
    } = this.state;
    return (
      <>
        <h4>Contact Form</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={firstName}
              name="firstName"
            />
            <span className="helper-text">
              {errors.firstName && errors.firstName}
            </span>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={lastName}
              name="lastName"
            />
            <span className="helper-text">
              {errors.lastName && errors.lastName}
            </span>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={this.handleChange}
              value={email}
              name="email"
            />
            {errors.email && errors.email}
          </div>
          <div className="input-field">
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={profession}
              name="profession"
            />
            {errors.profession && errors.profession}
          </div>
          <p>
            <label>
              <input
                name="seletedValue"
                type="radio"
                value="personal"
                onChange={this.handleChange}
                checked={this.state.seletedValue === "personal"}
              />
              <span>Personal</span>
            </label>
            <label>
              <input
                name="seletedValue"
                type="radio"
                value="professional"
                onChange={this.handleChange}
                checked={this.state.seletedValue === "professional"}
              />
              <span>Professional</span>
            </label>
          </p>
          <button className="waves-effect waves-light btn" type="submit">
            SUbmit
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
