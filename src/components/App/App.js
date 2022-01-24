import React, { Component } from "react";
import { nanoid } from "nanoid";
import Forma from "../Forma/Forma";
import ContactsList from "../ContactsList";

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (name) => {
    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h2>Phonebook</h2>
        <Forma onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
