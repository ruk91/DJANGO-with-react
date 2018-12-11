import React, { Component } from 'react';
import {Col,Form, FormGroup, Label, Input, 
    Button} from 'reactstrap';
// import NumberFormat from 'react-number-format';

class SignUp extends Component {
    render() {
        return (
            
            // Login Details
   
            <Col className="mt-4" sm="12" md={{ size: 6, offset: 3 }} style={{ backgroundColor: '#e9ecef', padding: '40px', }} >

                <div> 
                    <h3 style={{ textAlign: 'left' }}>Login</h3>
                    <hr />
                </div>

                <Form className='pl-4 pr-4'>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{ textAlign: 'left' }}>
                        <Label className="mr-sm-2">Username</Label>
                        <Input type="text"  placeholder="Enter your Username here" />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'left' }}>
                        <Label for="examplePassword" className="mr-sm-2">Password</Label>
                        <Input type="text" placeholder="Enter your Password here" />
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-2" check style={{ textAlign: 'left' }}>
                        <Label check>
                            <Input type="checkbox" id="checkbox2" />{' '}
                            Remember me
                        </Label>
                    </FormGroup>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4" style={{ textAlign: 'center' }}>
                        <Button 
                            color="primary"
                            //onClick={this.props.navigation.navigate('Home') }
                            href="/Home"
                        >
                            Login
                        </Button>
                    </FormGroup>
                    <Button 
                        color="link" 
                        href="/ForgotPassword"
                    >
                        Forgot password?
                    </Button>

            
                </Form>
            </Col>
            

        );
    }
}

export default SignUp;