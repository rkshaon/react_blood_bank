import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="#">
            <img
              src="https://www.pikpng.com/pngl/m/252-2525544_blood-drop-by-prapanj-a-drop-of-blood.png"
              alt="logo"
              height="50"
            />
          </a>
        </div>
        <ul>
          <li><Link to="/becomedonor">Become a donor</Link></li>
          <li><Link to="/requestblood">Request for blood</Link></li>
        </ul>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
