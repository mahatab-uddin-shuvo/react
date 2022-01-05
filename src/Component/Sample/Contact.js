import React, { Component } from "react";
import {Link} from "react-router-dom";
import {ContactContext} from "../../Contexts/ContactContext"

class Contact extends Component {
  static contextType = ContactContext
  state = {
    toggleContact: false,
  };

  handleDelete = (id) => () => {
    this.context.deleteContact(id);
  };

  handleEdit = (id) => ()=>{
    this.context.editContact(id);

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
            <Link to={`/edit/${id}`} onClick={this.handleEdit(id)}>
              <i className="material-icons right">edit</i>
            </Link>
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
