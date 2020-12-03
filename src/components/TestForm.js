import React, { Component } from 'react'
import Navigationbar from './header/Navigationbar'
import {
    Form,
    Row, Col
} from 'react-bootstrap';

import "../css/testForm.css"

class TestForm extends Component {
    constructor(props){
        super(props)
        this.state={
            phone: "",
            image: "",
            error: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    render() {
        return (
            <div className="test-form">
                <div className="bgimg">
                    <div className="wrapper">
                        <Navigationbar />
                        <div className="content">
                            <h1>Test Form</h1>
                        </div>
                    </div>
                </div>
                <Form id="ap-form" className="form">
                    <Form.Group>
                        <Form.Label>Patient Phone</Form.Label>
                        <Form.Control
                        type="phone"
                        name="phone"
                        required="required"
                        placeholder="(___) ___-____"
                        pattern="\(\d{3}\)[ ]?\d{3}[-]?\d{4}"
                        onChange={this.handleChange}
                        />
                    </Form.Group> 
                    
                    <Form.Group>
                        <Form.Label>Upload Driver's License</Form.Label>
                        <Form.Control
                        className="image-upload"
                        type="file"
                        multiple={3}
                        accept="image/*"
                        name="image"
                        required="required"
                        onChange={this.handleChange}
                        />
                    </Form.Group> 
                    <Form.Group className="text-center">
                        <button className="btn btn-outline-light send" type="submit" onClick={this.handleSubmit}>Save Test</button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default TestForm
