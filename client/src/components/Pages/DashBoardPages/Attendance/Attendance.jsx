import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Attendance.css'


function Attendance() {
    return (
        <div>
            <Card className="acard" style={{ width: '16.5rem' }}>
                <Card.Header className="cradHeading">Attendance</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <h2>75%</h2> 
                    </Card.Text>
                </Card.Body>
            </Card> 
            
            
        </div>
    )
}

export default Attendance
