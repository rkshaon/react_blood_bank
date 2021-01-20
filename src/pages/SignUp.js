import React from 'react'

const SignUp = () => {
  return (
    <section>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" placeholder="Enter name" id="name" />
        </div>
        <div>
          <label for="mobile1">Mobile</label>
          <input type="text" placeholder="Enter mobile" id="mobile1" />
        </div>
        <div>
          <label for="mobile2">Alternative Mobile</label>
          <input type="text" placeholder="Enter mobile" id="mobile2" />
        </div>
        <div>
          <label for="email">Email address:</label>
          <input type="email" placeholder="Enter email" id="email" />
        </div>
        <div>
          <label for="bloodgroup">Blood Group</label>
          <select id="bloodgroup">
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
        </div>
        <div>
          <label for="religion">Religion</label>
          <select id="religion">
            <option>Islam</option>
            <option>Hindu</option>
            <option>Buddhist</option>
            <option>Christian</option>
          </select>
        </div>
        <div>
          <label for="">Present Address</label>
          <input type="text" placeholder="Union" id="" />
          <input type="text" placeholder="Post Office" id="" />
          <input type="text" placeholder="Police Station" id="" />
          <input type="text" placeholder="District" id="" />
        </div>
        <div>
          <label for="weight">weight</label>
          <input type="text" placeholder="Enter weight" id="weight" />
        </div>
        <div>
          <label for="dob">Date of Birth</label>
          <input type="date" placeholder="Enter weight" id="dob" />
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

export default SignUp
