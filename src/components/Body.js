import React, { Component } from 'react'

import Header from './header/Header'
import Footer from './Footer'

class Body extends Component {
    render() {
        return (
            <div className="body">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Body
