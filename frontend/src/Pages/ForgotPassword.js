import React, { Component } from 'react';
import '../App.css';
import ForgotPasswordForm from '../../src/Components/FormComponent/forgotPassword';
import {Container, Row} from 'reactstrap';
//import Chart from 'chart.js';

class ForgotPassword extends Component {
    render() {
        return (
            <div 
                className="login" 
                style={ {  
                    backgroundImage: "url(" + "https://media.giphy.com/media/9bTjZrytydVRK/giphy.gif" + ")",
                }}
            >
                <Container>
                    <Row>
                        <ForgotPasswordForm/>
                    </Row>
                </Container>
                <br/>
            </div>

        
        );
    }
}

export default ForgotPassword;
