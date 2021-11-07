import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = () => {
    return (
      <>
        <header className='header'>
          <div className="container-head">
            <div className="img">
            <img src="/images/header_logo.png" width="50" height="50" alt=""/>
            </div>
              <h2 className='title'>Mobile Metrics Dashboard</h2>
          </div>
        <div className="container-nav">
            <nav>
              <ul>
                <Link to="/">
                Home
                </Link>
                <Link to="/insights">
                  Insights
                </Link>
                <Link to="/projects">
                  Projects
                </Link>
                <Link to="/contact">
                  Contact
                </Link>
              </ul>
            </nav>
        </div>
        </header>
                
    </>
    )
}

export default Navbar
