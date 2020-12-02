import React, { Component } from 'react'

import Navigationbar from './Navigationbar'

import '../../css/header/header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="bgimg">
                    <div className="wrapper">
                        <Navigationbar />
                        <div className="content">
                            <h1>Welcome <br/>Free <br/><span>Covid-19 </span><br/>Testing Site</h1>
                            <a className="appointment" href="/appointment/">Make an Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
