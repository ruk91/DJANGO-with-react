import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";class customerContactDetails extends Component {

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
                    <h3 style={{ textAlign: 'left' }}>Customer Address amd Contact Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Address</Label>

                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Permanent
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Temporary
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Business
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

                        <Label className="mr-sm-2">House Type</Label>

                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Owned
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Owned, but shared
                                </Label>
                            </FormGroup>

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Rented
                                </Label>
                            </FormGroup>

                        </Form>

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Rent/Lease Deposit Amount(Rs.)</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Contract/Lease Expiry Date</Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Owner's Name</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Monthly Rental (Rs.)</Label>
                        <Input type="currency"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">No of Rooms in House</Label>
                        <Input type="number"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Location Risk</Label>

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
                    
                </Form>
            </Col>

        );
    }
}

export default customerContactDetails;