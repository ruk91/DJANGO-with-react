import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input} from 'reactstrap';
// import NumberFormat from 'react-number-format';

class FormComponent extends Component {
    render() {
        return (
            
            // Customer Details
            <Col className="mt-4" sm='12' lg='12' md='12' style={{ backgroundColor: '#e9ecef', padding: '40px' }} >

                <div>
                    <h3 style={{ textAlign: 'left' }}>Customer Details</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Name in Full</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label for="examplePassword" className="mr-sm-2">Name with Initials</Label>
                        <Input type="text"  />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>

                        <Label className="mr-sm-2">Marital Status</Label>

                        <Form style={{ textAlign: 'left' }} >

                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Single
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Married
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Widow
                                </Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Divorced
                                </Label>
                            </FormGroup>

                        </Form>
                        
                    </FormGroup>

                </Form>
            </Col>

        );
    }
}

export default FormComponent;