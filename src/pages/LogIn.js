import React, {useState} from 'react'
import { useGlobalContext } from '../context';

const LogIn = () => {
  const {admins} = useGlobalContext();
  console.log('log in page ', admins);

  return (
    <section>
      <h1>Log In</h1>
      <form>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" placeholder="Enter email" id="email" />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input type="password" placeholder="Enter password" id="pwd" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default LogIn
