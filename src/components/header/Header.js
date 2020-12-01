import React, { Component } from 'react'

// import Navigationbar from './Navigationbar'

import '../../css/header/header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="bgimg">
                    <div className="wrapper">
                        <div className="top-bar">
                            <a href="tel:8885551212"><i className="fas fa-phone-alt icon"></i> 8885551212</a>
                            {
                                window.innerWidth < 601 ?
                                <br/> : ""
                            }
                            <a href="mailto:covidtesting@pillfills.com"><i className="fas fa-map-marker-alt icon"></i> covidtesting@pillfills.com</a>
                        </div>
                        {/* <Navigationbar /> */}
                        <div className="content">
                            <h1>Welcome <br/>Free <br/><span>Covid-19 </span><br/>Testing Site</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
