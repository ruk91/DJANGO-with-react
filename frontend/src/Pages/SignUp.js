import React, { Component } from 'react';
import '../App.css';
import SignUpForm from '../../src/Components/FormComponent/signUpForm';
import {Container, Row} from 'reactstrap';
//import Chart from 'chart.js';

class SignUp extends Component {
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
                        <SignUpForm/>
                    </Row>
                </Container>
                <br/>
            </div>

        
        );
    }
}

export default SignUp;
