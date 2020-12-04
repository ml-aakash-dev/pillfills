import React, { Component } from 'react'
import {
    Form,
    Row, Col
} from 'react-bootstrap';

import Navigationbar from '../header/Navigationbar'
import Footer from '../Footer'

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
    componentDidMount(){
        Array.prototype.forEach.call(document.body.querySelectorAll("*[data-mask]"), applyDataMask);

        function applyDataMask(field) {
            var mask = field.dataset.mask.split('');
            
            // For now, this just strips everything that's not a number
            function stripMask(maskedData) {
                function isDigit(char) {
                    return /\d/.test(char);
                }
                return maskedData.split('').filter(isDigit);
            }
            
            // Replace `_` characters with characters from `data`
            function applyMask(data) {
                return mask.map(function(char) {
                    if (char !== '_') return char;
                    if (data.length === 0) return char;
                    return data.shift();
                }).join('')
            }
            
            function reapplyMask(data) {
                return applyMask(stripMask(data));
            }
            
            function changed() {   
                var oldStart = field.selectionStart;
                var oldEnd = field.selectionEnd;
                
                field.value = reapplyMask(field.value);
                
                field.selectionStart = oldStart;
                field.selectionEnd = oldEnd;
            }
            
            field.addEventListener('click', changed)
            field.addEventListener('keyup', changed)
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
                        <Form.Control as="select" name="location" defaultValue={'DEFAULT'}
                        required="required">
                            <option disabled value="DEFAULT">Select a Location</option>
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
                        data-mask="(___) ___-____"
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
                            <Form.Control as="select" name="time" defaultValue={'DEFAULT'}
                            required="required">
                                <option disabled value="DEFAULT">Select Time</option>
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
                <Footer />
            </div>
        )
    }
}

export default Appointment
