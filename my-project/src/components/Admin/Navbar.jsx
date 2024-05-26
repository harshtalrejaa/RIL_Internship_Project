import React from 'react'
import { Route , Link} from 'react-router-dom'

function Navbar() {
    // const handleClick =() => {
    //     <Route path='/formBuilder' element={<FormBuilder />} />
    // }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://www.jio.com/logo.png" alt="Jio Logo" className="navbar-logo" />
      </div>
      <div className="navbar-right">
        <button className="navbar-button">View Profile</button>
        <Link to = '/formBuilder'> 
        <button className="navbar-button" > Create Form</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar