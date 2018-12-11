import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class guardianDetails extends Component {

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
                    <h3 style={{ textAlign: 'left' }}>Spouse or Guardian's Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Guardian's Name</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Date of Birth</Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Spouse Name</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Date of Birth</Label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                        />

                    </FormGroup>

                    
                </Form>
            </Col>

        );
    }
}

export default guardianDetails;