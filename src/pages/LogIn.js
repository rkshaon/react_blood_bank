import React from 'react'

const LogIn = () => {
  return (
    <section>
      <h1>Log In</h1>
      <form>
        <div>
          <label for="email">Email address:</label>
          <input type="email" placeholder="Enter email" id="email" />
        </div>
        <div>
          <label for="pwd">Password:</label>
          <input type="password" placeholder="Enter password" id="pwd" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default LogIn
