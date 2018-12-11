import React, { Component } from 'react';
import '../App.css';
import Discription from '../../src/Components/Discription/';
import {Container, Row} from 'reactstrap';
//import Chart from 'chart.js';

class Profile extends Component {
    render() {
        return (
            <div className="login" 
            style={ {  
                backgroundImage: "url(" + "https://media.giphy.com/media/9bTjZrytydVRK/giphy.gif" + ")",
            }}>
                <Container>
                    <Row>
                        <Discription/>
                    </Row>
                </Container>
            </div>

        
        );
    }
}

export default Profile;
