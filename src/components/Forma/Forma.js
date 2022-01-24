import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name } = this.state;
    this.props.onSubmit(name);
    this.reset();
  };

  reset() {
    this.setState({ name: "" });
  }
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
