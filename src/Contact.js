import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
  }
  render() {  
    return (
      <li className="contact-list">
        {this.props.contact.name}
      </li>
    );
  }
}

export default Contact;