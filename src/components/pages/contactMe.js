import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class contactMe extends Component {
  constructor(props) {
    super(props)
      this.state = {name: ''};
      this.state = {email: ''};
      this.state = {message: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("Thank you! I'll be in touch soon!");
    event.preventDefault();
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="heading">
      	 <h1>Contact Me</h1>
        </div>

        <div className="intro_text">
          <p>I'd love to hear from you if you had any questions or requests. Use the form below and I'll try and get back to you as soon
          as I can!</p>
        </div>


    <div className="form">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <input className="name" type="text" value={this.state.name} onChange={this.handleChange} /><br />
          E-mail:
            <input className="email" type="text" value={this.state.email}/><br />
          Message:
            <textarea className="message" type="text" value={this.state.message}/><br />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>

      </div>

    );
  }
}

export default contactMe;
