import React, { Component } from 'react'
import User from "./components/User";
import Navbar from "./components/Navbar";
import Users from "./components/Users"
import './App.css';

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Bilal Keremoğlu",
        salary: "5000",
        department: "Yazılım"
      },
      {
        id: 2,
        name: "Ayça Akar",
        salary: "4500",
        department: "Sağlık"
      }

    ]
  }

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
        <h4 style={{ color: "red", fontSize: "30px" }}>App Component</h4>
        <User />
        <Navbar title="Function components" />
        <hr />
        <br />
        <Users deleteUser ={this.deleteUser} users = {this.state.users}></Users>
      </div>
    );
  }
}



export default App;
