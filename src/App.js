import React, { Component } from 'react';
import './App.css';
import User from './User/User';
import Header from './Header/Header';



class App extends Component  {
  state = {
    users: [
      {
        id: 1,
        image: "",
        name: "Solid Snake",
        phone: "(555) 123-4567",
        email: "solid.snake@mgs.com",
        dob: "07-13-1972"
      },
      {
        id: 2,
        image: "",
        name: "Jack Raiden",
        phone: "(555) 891-0111",
        email: "jack.raiden@mgs.com",
        dob: "07-23-1983"
      },
      {
        id: 3,
        image: "",
        name: "Revolver Ocelot",
        phone: "(555) 867-5309",
        email: "revolver.ocelot@mgs.com",
        dob: "07-23-2000"
      }
    ],
    search : ""
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 30) });
  }

  render() {
    console.log('this', this)
    let filteredUsers = this.state.users.filter(
      (users) => {
        return (users.name.toLowerCase()).indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div className="App">
        <nav className="Nav">
          <p className="NavTitle">Employee Directory</p>
          <p className="NavInstructions">Enter the name you are searching for in the search</p>
        </nav>

        <input
          type='text'
          placeholder='Search name'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />

        <Header />
        {filteredUsers.map(user => {
          return (
            <User
              image={user.image}
              name={user.name}
              phone={user.phone}
              email={user.email}
              dob={user.dob}
              key={user.id} />
          );
        })}
      </div>
    );
  }
}

export default App;
