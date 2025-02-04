import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div>
<nav className={`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme={`${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">{props.text}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.setmode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
       </div>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

// Navbar.defaultProps={
//   title:'textutils',
//   text:'About text'
// };