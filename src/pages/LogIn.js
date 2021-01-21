import React, { useState } from 'react'
import { useGlobalContext } from '../context';

const LogIn = () => {
  const { Login } = useGlobalContext();
  const [details, setDetails] = useState({email: "", password: ""});
  const handleSubmit = (e) => {
    e.preventDefault();
    Login(details);
    // console.log('submit');
  }
  return (
    <section>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            placeholder="Enter email"
            id="email"
            onChange={e => setDetails({...details, email: e.target.value})}
            value={details.email}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            id="pwd"
            onChange={e => setDetails({...details, password: e.target.value})}
            value={details.password}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default LogIn
