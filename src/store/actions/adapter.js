export const logIn = (event) => {
  return fetch(`http://localhost:3001/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: event.target.username.value,
        password: event.target.password.value
      }
    })
  }).then(res => res.json())
  .catch(console.error)
}

export const signUp = (event) => {
    return fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: event.target.username.value,
          password: event.target.password.value
        }
      })
    })
      .then(resp => resp.json())
  };

  export const logOut = (event) => {
    console.log("in adapter logOut")
  };

  export const update = (habit) => {
    return fetch(`http://localhost:3001/habits/${habit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(habit)
    })
    .then(r => r.json())
  }
