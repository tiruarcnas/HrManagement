import React from 'react';
import './AdminDashBoard.css'
import Announcement from './Announcements/Announcement'
import { Card } from 'react-bootstrap';
import LeaveRequests from './LeaveRequests/LeaveRequests';
import Birthday from './Birthday/Birthday';


function AdminDashBoard() {
    return (
        <div>
             <Card className="admindashboard" style={{ width: '95%' }}>
                <Card.Body className="maincard1">
                    <Announcement />  
                </Card.Body>
                <Card.Body className="maincard2">
                    <LeaveRequests /> 
                </Card.Body>
                <Card.Body className="maincard3"> 
                    <Birthday className="birthday"/>   
                </Card.Body>
                
                
            </Card> 
            
            


        </div>
    )
}

export default AdminDashBoard
