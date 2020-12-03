import React, { Component } from 'react'
import {
    Form,
    Row, Col
} from 'react-bootstrap';

import Navigationbar from '../header/Navigationbar'

import '../../css/appointment/appointment.css'

class Appointment extends Component {
    constructor(props){
        super(props)
        this.state={
            location: "",
            phone: "",
            date: "",
            time: "",
            error: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    // handleSubmit = e => {
    //     // e.preventDefault()
    //     // var number = document.getElementById('ap-phone').value
    //     // if(this.state.phone!== /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/){
    //     //     this.setState({
    //     //         error: "please enter the right number"
    //     //     })
    //     // }
        
    //     // reset the fields
    //     this.resetForm()
    // }
    // resetForm(){
    //     document.getElementById('ap-form').reset();
    //     this.setState({
    //         location: "",
    //         phone: "",
    //         date: "",
    //         time: "",
    //         error: ""
    //     })
    // }
    render() {
        return (
            <div className="ma-appointment">
                <div className="bgimg">
                    <div className="wrapper">
                        <Navigationbar />
                        <div className="content">
                            <h1>Make an Appointment</h1>
                        </div>
                    </div>
                </div>
                <Form id="ap-form" className="form">
                    <Form.Group>
                        <Form.Label>Preferred Testing Location</Form.Label>
                        <Form.Control as="select" name="location"
                        required="required">
                            <option disabled selected  value="">Select a Location</option>
                            <option>Lansing, IL</option>
                            <option>Chicago Heights, IL</option>
                            <option>Joliet, IL</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                        id="ap-phone"
                        type="phone"
                        name="phone"
                        required="required"
                        placeholder="(708) 555-1212"
                        pattern="\(\d{3}\)[ ]?\d{3}[-]?\d{4}"
                        onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                            <Form.Label>Preferred Testing Date</Form.Label>
                                <Form.Control
                                type="date"
                                name="date"
                                required="required"
                                onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group>
                            <Form.Label>Preferred Testing Time</Form.Label>
                            <Form.Control as="select" name="time"
                            required="required">
                                <option disabled selected value="">Select Time</option>
                                <option>10:00 AM</option>
                                <option>10:30 AM</option>
                                <option>11:00 AM</option>
                                <option>10:30 AM</option>
                                <option>12:00 AM</option>
                                <option>10:30 AM</option>
                                <option>01:00 AM</option>
                                <option>01:30 AM</option>
                                <option>02:00 AM</option>
                                <option>02:30 AM</option>
                                <option>03:00 AM</option>
                                <option>03:30 AM</option>
                                <option>04:00 AM</option>
                                <option>04:30 AM</option>
                                <option>05:00 AM</option>
                            </Form.Control>
                        </Form.Group>
                        </Col>
                    </Row>   
                    <Form.Group className="text-center">
                        <button className="btn btn-outline-light send" type="submit" onClick={this.handleSubmit}>Set Appointment</button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Appointment
