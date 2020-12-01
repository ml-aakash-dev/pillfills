import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import '../../css/header/navigationbar.css'

class Navigationbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">COVID Testing <br/> <span>Chicagoland Drive-Up Testing</span></Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Navbar>
        )
    }
}

export default Navigationbar
