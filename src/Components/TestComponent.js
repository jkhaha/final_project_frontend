import React, { Component } from 'react';

class TestComponent extends Component {

postUsersToBackend(){
  return fetch(`http://localhost:3001/users`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //INTERPOLATE TOKEN HERE!!!!!!!!!!
     'Authorization': `Bearer <token>`
  },
  body: JSON.stringify({
    user: {
      username: 'new user',
      password: 'hi'
    }
  })
})
  .then(r => r.json())
  .then(console.log)
}

  render(){
    this.postUsersToBackend()
    return(
      <h1>test</h1>
    )
  }
}

export default TestComponent
