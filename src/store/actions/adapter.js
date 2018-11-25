export const fetchForLogin = (event) => {
  return fetch(`http://localhost:3001/users`, {
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
}
