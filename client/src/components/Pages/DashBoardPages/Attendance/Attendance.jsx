import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Attendance() {
    return (
        <div>
            <Card className="card2" style={{ width: '16.5rem' }}>
                <Card.Header>Attendance</Card.Header>
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
