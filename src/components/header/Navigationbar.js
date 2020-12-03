import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Login from '../auth/Login'
import { Redirect } from "react-router-dom";

import '../../css/header/navigationbar.css'

class Navigationbar extends Component {
  constructor(props){
      super(props)
      const token=localStorage.getItem("token")

      let loggedin = true
      if(token==null){
          loggedin = false
      }

      this.state = {
          loginToggle: false,
          loggedin,
          logout: false
          
      }
      
      this.loginElement = React.createRef()
  }
      onLoginToggle = () => {
        this.setState({
            loginToggle: !this.state.loginToggle
        })

        this.loginElement.current.onCloseModal()
    }
    onLogout = () => {
      localStorage.removeItem("token")
      this.setState({
        logout: true
      })
  }
    render() {
      if(this.state.logout){
        window.location = "/"
    }
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
                {/* <Nav.Link onClick={() => this.onLoginToggle()}><i className="fas fa-user"></i>&nbsp;Login</Nav.Link> */}
                {
                  this.state.loggedin ? 
                  
                  <Nav.Link onClick={() => this.onLogout()}><i className="fas fa-user"></i>&nbsp;Logout</Nav.Link>
                  : 
                  
                  <Nav.Link onClick={() => this.onLoginToggle()}><i className="fas fa-user"></i>&nbsp;Login</Nav.Link>
                }
              </Nav>
            </Navbar>
            <Login 
                    loginToggle={this.state.loginToggle}
                    onLoginToggle={() => this.onLoginToggle()}
                    ref={this.loginElement}
                />
        </div>
        )
    }
}

export default Navigationbar
