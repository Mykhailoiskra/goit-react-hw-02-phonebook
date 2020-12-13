import { Component } from "react";
// import PropTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Number
            <input
              type="text"
              value={number}
              name="number"
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
