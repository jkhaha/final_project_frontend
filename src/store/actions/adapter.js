export const logIn = (event) => {
  console.log("in log in")
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


// start with this tomorrow
  export const createHabit = (event) => {
    console.log("in adapter createHabit")
      return fetch("http://localhost:3001/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          user: {
            description: event.target.description.value,
            frequency: event.target.frequency.value,
            start_date: event.target.start_date.value
          }
        })
      })
        .then(resp => resp.json())
    };
