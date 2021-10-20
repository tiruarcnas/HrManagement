import React from 'react'
import { Card,Form,Row,Col } from 'react-bootstrap';
import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';

function WorkInformation() {
  return (
    <div>
      <Card className="bsccard" style={{ width: '65%' }}>
                <Card.Header><b>Hierarchy Information</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                    <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Reporting Manager
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="mail" placholder="firstname"/>
                        </Col>
                      </Form.Group>
                    </Form>
                    </Card.Text>
                </Card.Body>
            </Card> 
      
    </div>
  )
}

export default WorkInformation
