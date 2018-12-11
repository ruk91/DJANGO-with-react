import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input, 
    Button} from 'reactstrap';
// import NumberFormat from 'react-number-format';

class ForgotPasswordForm extends Component {
    render() {
        return (
            
            // Login Details
   
            <Col className="mt-4" sm="12" md={{ size: 6, offset: 3 }} style={{ backgroundColor: '#e9ecef', padding: '40px', }} >

                <div> 
                    <h3 style={{ textAlign: 'left' }}>Password Reset Form</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">E-mail Address</Label>
                        <Input type="text"  placeholder="Enter your email here" />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'center' }}>
                        <Button 
                            color="primary"
                            //onClick={this.props.navigation.navigate('Home') }
                            href="/"
                        >
                            Reset my password
                        </Button>
                    </FormGroup>
            
                </Form>
            </Col>
            

        );
    }
}

export default ForgotPasswordForm;