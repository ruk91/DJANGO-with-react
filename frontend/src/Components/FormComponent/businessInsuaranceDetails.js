import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";

class businessInsuaranceDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
            this.handleChange = this.handleChange.bind(this);
        }
        
        handleChange(date) {
            this.setState({
                startDate: date
            });
        }

    render() {
        return (
            
            // Customer Details
            <Col className="mt-4" sm='12' lg='12' md='12' style={{ backgroundColor: '#e9ecef', padding: '40px' }} >

                <div>
                    <h3 style={{ textAlign: 'left' }}>Business Insuarance Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                    <Label className="mr-sm-2">Availability of Insuarance Policy</Label>

                    <Form style={{ textAlign: 'left' }} >

                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> Yes
                            </Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Label check>
                                <Input type="checkbox" /> No
                            </Label>
                        </FormGroup>

                    </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Sum Insured</Label>
                        <Input type="text"  />

                    </FormGroup>
                    
                </Form>
            </Col>

        );
    }
}

export default businessInsuaranceDetails;