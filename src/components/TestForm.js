import React, { Component } from 'react'
import Navigationbar from './header/Navigationbar'
import {Form} from 'react-bootstrap';

import Footer from './Footer'

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
                        data-mask="(___) ___-____"
                        pattern="\(\d{3}\)[ ]?\d{3}[-]?\d{4}"
                        onChange={this.handleChange}
                        />
                    </Form.Group> 
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
                <Footer />
            </div>
        )
    }
}

export default TestForm
