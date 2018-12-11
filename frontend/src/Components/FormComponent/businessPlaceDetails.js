import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class businessPlaceDetails extends Component {

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
                    <h3 style={{ textAlign: 'left' }}>Business Place Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Business Location Ownership</Label>

                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Owned
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Rent
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> With hird party
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Other
                                </Label>
                            </FormGroup>

                        </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">No. of Floors (Business Place)</Label>
                        <Input type="number"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Business Location</Label>

                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Shop
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Home
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Market
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Other
                                </Label>
                            </FormGroup>

                        </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Business Location Risk</Label>

                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Low
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Medium
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> High
                                </Label>
                            </FormGroup>

                        </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Business Record</Label>
                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Good
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Average
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Poor
                                </Label>
                            </FormGroup>
                        </Form>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Experience in Business</Label>

                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Years</Label>
                            <Input type="number"/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Months</Label>
                            <Input type="number" />
                            </FormGroup>
                        </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Duration at Present Location</Label>

                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Years</Label>
                            <Input type="number"/>
                            </FormGroup>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label className="mr-sm-2">Months</Label>
                            <Input type="number" />
                            </FormGroup>
                        </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Registered</Label>
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
                        <Label className="mr-sm-2">Anyone to Manage Business in your Absence?</Label>
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
                        <Label className="mr-sm-2">Relationship</Label>
                        <Input type="text"  />
                    </FormGroup>
                    
                </Form>
            </Col>

        );
    }
}

export default businessPlaceDetails;