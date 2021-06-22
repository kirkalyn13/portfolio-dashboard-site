import React from 'react'
import {Link } from 'react-router-dom'
import '../App.css';

const Navbar = ({logo}) => {
    return (
      <>
        <header className='header'>
          <div className="container-head">
            <div className="img">
            <img src="/images/header_logo.png" width="70" height="70" alt=""/>
            </div>
          </div>
          <h1 className='title'>Mobile Metrics Dashboard</h1>
        <div className="container-nav">
            <nav>
              <ul>
                <Link to="/">
                Home
                </Link>
                <Link to="/dlspeed">
                  DL Speed
                </Link>
                <Link to="/latency">
                  Latency
                </Link>
                <Link to="/subscribers">
                  Subscribers
                </Link>
                <Link to="/awards">
                  Awards
                </Link>
                <Link to="/products">
                  Products
                </Link>
              </ul>
            </nav>
        </div>
        </header>
                
    </>
    )
}

export default Navbar
