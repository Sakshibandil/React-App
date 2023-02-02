import Users from './components/card';
import './App.css';
import React, { Component } from 'react';
import logo from './img/lgm-logo.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_data : [],
      loading : true
    }
    this.displayUsers = this.displayUsers.bind(this)
  }

  displayUsers() {
    document.getElementById("main").style.display = 'flex';
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
    .then(response => response.json())
    .then((users) => {
      this.setState({
        user_data : users.data,
        loading : false
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-ligh rounded m-3">
          <div className="container-fluid">
            <img src = {logo} alt = "LGM-Logo" height="80" width="200" className="logo" />
            <h3>User Card App &lt;TASK - 2&gt;</h3>
            <button onClick={this.displayUsers} users={this.state.user_data}>
              Get Users
            </button>
          </div>
        </nav>
        <Users loading = {this.state.loading} users = {this.state.user_data} />
      </>
    )
  }
}

export default App;