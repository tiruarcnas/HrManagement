import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Attendance from '../Attendance/Attendance'
import './Announcement.css'

function Announcement() {
  return (
    <div className="announcement">
        <Card className="card1" style={{ width: '16.5rem' }}>
          <Card.Header className="card1heading">Total Employee(s)</Card.Header>
          <Card.Body>
            <Card.Text>
             <h2>10</h2>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card2" style={{ width: '16.5rem' }}>
          <Card.Header className="card2heading">On Boarding</Card.Header>
          <Card.Body>
            <Card.Text>
             <h2>05</h2>
            </Card.Text>
          </Card.Body>
        </Card>  
        <Card className="card3" style={{ width: '16.5rem' }}>
                <Card.Header className="card3heading"> Remote Location</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <h2>06</h2> 
                    </Card.Text>
                </Card.Body>
            </Card>   
        <div className="attendance">
          <Attendance />
        </div>
        
    </div>
  )
}

export default Announcement
