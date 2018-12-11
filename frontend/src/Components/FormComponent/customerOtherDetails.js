import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

class customerOtherDetails extends Component {

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
                    <h3 style={{ textAlign: 'left' }}>Customer other Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Occupation Type</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Primary Occupation</Label>
                        <Input type="text"  />

                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Secondary Occupation</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Other Occupations</Label>
                        <Input type="text"  />
                    </FormGroup>

                    
                </Form>
            </Col>

        );
    }
}

export default customerOtherDetails;