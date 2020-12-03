import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody,
    Form, Input, Button, Label } from 'reactstrap';
import { Redirect } from "react-router-dom";

import '../../css/auth/login.css'


class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: '',
            password: '',
            error: '',
            msg: '',
            testUser: false,
            testViewer: false
        }
        this.onChange = this.onChange.bind(this)
    }

    onCloseModal = () => {
        this.setState({
            user: '',
            password: '',
            error: ''

        })
    }

    onChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        // e.preventDefault()
        if(this.state.user==="test" && this.state.password==="test123"){
        localStorage.setItem("token", "daygcfjadsfjhabaksjdhk")
        this.setState({
            testUser: !this.state.testUser
        })
        }
        else if(this.state.user==="testviewer" && this.state.password==="test123"){
            localStorage.setItem("token", "daygcfjadsfjhabaksjdhk")
            this.setState({
                testViewer: !this.state.testViewer
            })
            }
        else{
            this.setState({
                loggedin: false,
                error: 'username or password is incorrect'
            })
        }
        
    }

    render() {
        if(this.state.testUser){
            return <Redirect to="/test-form/" />
        }
        
        if(this.state.testViewer){
            return <Redirect to="/test-data/" />
        }
        return (
                <Modal 
                modalClassName="login-modal"
                isOpen={this.props.loginToggle} 
                toggle={() => this.props.onLoginToggle()} 
                centered
                >
                    <ModalHeader toggle={() => this.props.onLoginToggle()} style={{borderBottom: 0}}></ModalHeader>
                    <ModalBody cssModule={{'modal-body': 'text-center'}} style={{marginBottom: '50px'}}>
                        <Form style={{paddingLeft: '50px', paddingRight: '50px'}}>
                                <h4>Covid Testing Form</h4>
                                <br />
                                <div style={{color:'red',textAlign:'center', fontWeight:'bold'}}></div>
                                <Input type="text" placeholder="Username or Email Address" value={this.state.user} name="user" onChange={this.onChange} />
                                <br />
                                <Input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.onChange}/>
                                <br />
                                {/* <Input type="submit" value="Login" onSubmit={() => this.handleLogin()}/> */}
                                <Button onClick={() => this.handleLogin()}>Login</Button>
                                {this.state.error !== '' ? 
                            <div>
                                <br />
                                <Label style={{color: 'red'}}>{this.state.error}</Label>
                            </div> : ''    
                        }
                        </Form>
                    </ModalBody>
                </Modal>
        )
    }
}

export default Login
