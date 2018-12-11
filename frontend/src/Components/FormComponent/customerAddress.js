import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class customerAddress extends Component {

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
                    <h3 style={{ textAlign: 'left' }}>Customer Address</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Address (Line 1)</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Address (Line 2)</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Address (Line 3)</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Address (Line 4)</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Postal Code</Label>
                        <Input type="number"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">G/S Division</Label>
                        <Input type="text"  />
                    </FormGroup> */}

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Mobile Phone No.</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Fixed Telephone No.</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Duration of Stay</Label>

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
                        <Label className="mr-sm-2">E-mail</Label>
                        <Input type="text"  />
                    </FormGroup>
                    
                </Form>
            </Col>

        );
    }
}

export default customerAddress;