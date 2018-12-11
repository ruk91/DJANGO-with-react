import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class basicLoanDetails extends Component {

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
                    <h3 style={{ textAlign: 'left' }}>Basic Loan Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Requested Loan Amount (Rs.)</Label>
                        <Input type="currency"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Business</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Purpose of Loan</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Repayment Mothod</Label>
                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Weekly
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Monthly
                                </Label>
                            </FormGroup>

                        </Form>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">If have Miyulasi Savings Account?</Label>
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
                        <Label className="mr-sm-2">Mode of Disbursement</Label>
                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Cheque
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Cash
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Savingd Account
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Other Bank Account
                                </Label>
                            </FormGroup>

                        </Form>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">If Savings Account/ Other Bank Account, Account No.</Label>
                        <Input type="number"  />
                    </FormGroup>

                </Form>
            </Col>

        );
    }
}

export default basicLoanDetails;