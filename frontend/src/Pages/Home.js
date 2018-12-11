import React, { Component } from 'react';
import '../App.css';
import FormComponent from '../../src/Components/FormComponent/';
import GuardianDetails from '../../src/Components/FormComponent/guardianDetails';
import CustomerOtherDetails from '../../src/Components/FormComponent/customerOtherDetails';
import BusinessInsuaranceDetails from '../../src/Components/FormComponent/businessInsuaranceDetails';
import CustomerContactDetails from '../../src/Components/FormComponent/customerContactDetails';
import CustomerAddress from '../../src/Components/FormComponent/customerAddress';
import BusinessPlaceDetails from '../../src/Components/FormComponent/businessPlaceDetails';
import BasicLoanDetails from '../../src/Components/FormComponent/basicLoanDetails';
import GuarantorsDetails from '../../src/Components/FormComponent/guarantorsDetails';


import {Container, Row} from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="home" 
            // style={ {  
            //     backgroundImage: "url(" + "https://media.giphy.com/media/9bTjZrytydVRK/giphy.gif" + ")",
            // }}
            >
    
                <Container>
                    <Row>
                        <FormComponent/>
                    </Row>
                    <Row>
                        <GuardianDetails/>
                    </Row>
                    <Row>
                        <CustomerOtherDetails/>
                    </Row>
                    <Row>
                        <BusinessInsuaranceDetails/>
                    </Row>
                    <Row>
                        <CustomerContactDetails/>
                    </Row>
                    <Row>
                        <CustomerAddress/>
                    </Row>
                    <Row>
                        <BusinessPlaceDetails/>
                    </Row>
                    <Row>
                        <BasicLoanDetails/>
                    </Row>
                    <Row>
                        <GuarantorsDetails/>
                    </Row>
                </Container>
            <br/>
            </div>
            
        );
    }
}

export default Home;
