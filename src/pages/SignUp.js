import React from 'react'

const SignUp = () => {
  return (
    <section>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter name" id="name" />
        </div>
        <div>
          <label htmlFor="mobile1">Mobile</label>
          <input type="text" placeholder="Enter mobile" id="mobile1" />
        </div>
        <div>
          <label htmlFor="mobile2">Alternative Mobile</label>
          <input type="text" placeholder="Enter mobile" id="mobile2" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" placeholder="Enter email" id="email" />
        </div>
        <div>
          <label htmlFor="bloodgroup">Blood Group</label>
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
          <label htmlFor="religion">Religion</label>
          <select id="religion">
            <option>Islam</option>
            <option>Hindu</option>
            <option>Buddhist</option>
            <option>Christian</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Present Address</label>
          <input type="text" placeholder="Union" id="address_union" />
          <input type="text" placeholder="Post Office" id="address_po" />
          <input type="text" placeholder="Police Station" id="address_ps" />
          <input type="text" placeholder="District" id="address_district" />
        </div>
        <div>
          <label htmlFor="weight">weight</label>
          <input type="text" placeholder="Enter weight" id="weight" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" placeholder="Enter weight" id="dob" />
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

export default SignUp
