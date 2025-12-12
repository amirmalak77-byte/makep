import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
 <>
   
<nav className="navbar navbar-expand-lg bg-light fixed-top py-3 ">
  <div className="container">
    {/* <img className='imge rounded-5 me-3' src= {Logo} alt="" /> */}
    <Link className="navbar-brand text-black fs-3 fw-bold" to="">Make Up</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-black fs-5" aria-current="page" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-black fs-5" aria-current="page" to="product">Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-black fs-5" aria-current="page" to="cosmetik">Cosmetik</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

 
 
 
 
 
 </>
  )
}
