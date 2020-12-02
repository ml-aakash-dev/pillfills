import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import '../../css/header/navigationbar.css'

class Navigationbar extends Component {
    render() {
        return (
        <div className="navigationbar">
          <div className="top-bar">
              <a href="tel:8885551212"><i className="fas fa-phone-alt icon"></i> 8885551212</a>
              {
                  window.innerWidth < 601 ?
                  <br/> : ""
              }
              <a href="mailto:covidtesting@pillfills.com"><i className="fas fa-map-marker-alt icon"></i> covidtesting@pillfills.com</a>
          </div>
            <Navbar variant="dark">
              <Navbar.Brand href="/">COVID Testing <small>Chicagoland Drive-Up Testing</small></Navbar.Brand>
              {/* <h2 className="logo">COVID Testing</h2>
              <br/>
              <span className="sub-title">Chicagoland Drive-Up Testing</span> */}
              <Nav className="ml-auto">
                <Nav.Link><i className="fas fa-user"></i>&nbsp;Login</Nav.Link>
              </Nav>
            </Navbar>
        </div>
        )
    }
}

export default Navigationbar
