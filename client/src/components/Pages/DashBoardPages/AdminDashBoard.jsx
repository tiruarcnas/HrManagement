import React from 'react';
import './AdminDashBoard.css'
import Announcement from './mainCard1/Announcement'
import { Card } from 'react-bootstrap';
import LeaveRequests from './LeaveRequests/LeaveRequests';
import Birthday from './Birthday/Birthday';
import NewHiresUpdate from './NewHiresUpdate/NewHiresUpdate';
import Ament from './Announcement/Ament';
import UpcomingHolidays from './UpcomingHolidays/UpcomingHolidays'



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
                    <NewHiresUpdate/>
                    <div>
                    <Birthday/> 
                    <Ament />
                    </div>
                    <UpcomingHolidays />
                </Card.Body>
                
                
            </Card> 
            
            


        </div>
    )
}

export default AdminDashBoard
