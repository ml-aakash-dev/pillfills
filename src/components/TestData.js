import React, { Component } from 'react'
import Navigationbar from './header/Navigationbar'
import Table from 'react-bootstrap/Table'

import Footer from './Footer'

import '../css/testData.css'

class TestData extends Component {
    constructor(props){
        super(props)
        this.state={
            testData: [
                {
                    id: "1",
                    name: "Mark",
                    phone: "123456789",
                    result: "negative",
                    date: "1/12/2020"
                },
                {
                    id: "2",
                    name: "Jacob",
                    phone: "123456789",
                    result: "negative",
                    date: "1/12/2020"
                },
                {
                    id: "3",
                    name: "Larry ",
                    phone: "123456789",
                    result: "negative",
                    date: "1/12/2020"
                },
                {
                    id: "4",
                    name: "Otto",
                    phone: "123456789",
                    result: "negative",
                    date: "1/12/2020"
                },
                {
                    id: "5",
                    name: "Thornton",
                    phone: "123456789",
                    result: "negative",
                    date: "1/12/2020"
                }
            ]
        }
    }
    render() {
        return (
            <div className="test-data">
                <div className="bgimg">
                    <div className="wrapper">
                        <Navigationbar />
                        <div className="content">
                            <h1>Test Data</h1>
                        </div>
                    </div>
                </div>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Test Result</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.testData.map((test,key) => (
                                <tr key={key}>
                                    <td>{test.id}</td>
                                    <td>{test.name}</td>
                                    <td>{test.phone}</td>
                                    <td>{test.result}</td>
                                    <td>{test.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Footer />
            </div>
        )
    }
}

export default TestData
