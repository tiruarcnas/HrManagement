import React from 'react'
import { Card,Form,Row,Col } from 'react-bootstrap';
import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';

function PersonalInformation() {
  return (
    <div>
      <Card className="bsccard" style={{ width: '65%' }}>
                <Card.Header><b>Personal Information</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                    <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Date of Birth
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="mail" placholder="firstname"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Age
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="mail" placholder="firstname"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Gender
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="mail" placholder="firstname"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Phone Number
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="mail" placholder="firstname"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Employment Status
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="mail" placholder="firstname"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Experience
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

export default PersonalInformation
