import React, { Component } from 'react';
import { Col, Button, Alert, Form, FormGroup} from 'reactstrap';


class RightSideComponent extends Component {
    render() {
        return (
            <Col sm='4' lg='4' md='4' style={{ backgroundColor: '#e9ecef', padding: '40px' }}>

                <div>
                    <h4 style={{ textAlign: 'center' }}>Order Summary</h4>
                    <hr />
                    <p style={{ textAlign: 'center', color: 'gray' }} className='mb-4'>Please check the final amount before you pay.</p>
                </div>
                <Form>

                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0 mt-4">
                        <h4 className="mr-sm-2" style={{ textAlign: 'center' }}>Rs.1024.00</h4>
                    </FormGroup>

                    <Alert/>
                    <Button  style={{ backgroundColor: '#6dc1c3', borderWidth: 0 }} size="md" block>Pay</Button>
                </Form>

            </Col>
        );
    }
}

export default RightSideComponent;