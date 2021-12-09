import React, { Component } from "react";

class Contact extends Component {
  state = {
    toggleContact: false,
  };

  handleDelete = (id) => () => {
    this.props.deleteContact(id);
  };

  handleEdit = (id) => ()=>{
    this.props.editContact(id);
  }

  handleToggleContact = () => {
    this.setState({
      toggleContact: !this.state.toggleContact,
    });
    console.log(this.state.toggleContact);
  };
  render() {
    const { id, firstName, lastName, email, profession } = this.props.contact;
    return (
      <div className="card">
        <div className="card-content z-depth-5">
          <h6 className="Card-title">
            {firstName} {lastName}
            <a href="#!" onClick={this.handleToggleContact}>
              <i className="material-icons right">
                {this.state.toggleContact ? "arrow_drop_up" : "arrow_drop_down"}
              </i>
            </a>
            <a href="#!" onClick={this.handleDelete(id)}>
              <i className="material-icons right">delete</i>
            </a>
            <a href="#!" onClick={this.handleEdit(id)}>
              <i className="material-icons right">edit</i>
            </a>
          </h6>
          {this.state.toggleContact && (
            <ul>
              <li>{email}</li>
              <li>{profession}</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
