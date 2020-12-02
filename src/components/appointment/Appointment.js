import React, { Component } from 'react'
import {
    Form,
    Row, Col
} from 'react-bootstrap';

import Navigationbar from '../header/Navigationbar'

import '../../css/appointment/appointment.css'

class Appointment extends Component {
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
                <Form id="contact-form" className="form">
                    <Form.Group>
                        <Form.Label>Preferred Testing Location</Form.Label>
                        <Form.Control as="select"
                        required="required">
                            <option>Select a Location</option>
                            <option>Lansing, IL</option>
                            <option>Chicago Heights, IL</option>
                            <option>Joliet, IL</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                        type="phone"
                        name="phone"
                        required="required"
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
                            <Form.Control as="select"
                            required="required">
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
