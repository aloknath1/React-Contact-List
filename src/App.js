import React, { Component } from 'react';
import Contact from './Contact';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {search: ''};
    this.contacts = [{id:1,name:"Scott"}, {id:2,name:"Tim"}, {id:3,name:"Jenny"},{id:4,name:"Escort"}];
  }

  updateValue(event){
    this.setState({search: event.target.value});
  }

  render() {
    let filteredContacts = this.contacts.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
    )
    return (
      <div className="App">
        <h1>Contact List</h1>
        <input type="text" value={this.state.search} onChange={this.updateValue.bind(this)} />
        <ul>
          {filteredContacts.map((contact) => {            
            return <Contact contact={contact} key={contact.id} />
          })}
        </ul>

      </div>
    );
  }
}

export default App;