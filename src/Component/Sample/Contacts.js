import React, { Component } from "react";
import Contact from "./Contact";
import {ContactContext} from "../../Contexts/ContactContext"
class Contacts extends Component {
  static contextType = ContactContext
  state = {
    searchText: "",
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const {contacts} = this.context.state;
    const filteredList = contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().indexOf(this.state.searchText) !== -1 ||
        contact.lastName.toLowerCase().indexOf(this.state.searchText) !== -1
    );
    return (
      <>
        <h4>Contacts</h4>
        <nav>
          <div className="nav-wrapper white">
            <form>
              <div className="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="Search..."
                  value={this.state.searchText}
                  onChange={this.handleChange}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>

        <div className="row">
          {filteredList.map((contact) => (
            <div className="col s6" key={contact.id}>
              <Contact
                contact={contact}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Contacts;
