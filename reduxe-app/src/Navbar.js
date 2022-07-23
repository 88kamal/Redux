import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const amount = useSelector(state => state.amount)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light " style={{background: 'purple'}}>
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">
        <img className=' ' src="img/1.png" alt="" width={150} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Link</a>
        </li>
      </ul>
     <div>
     <button disabled={true} className="btn btn-success text-dark " style={{background: 'yellow'}} type="submit">Your Balance :{amount}</button>
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar