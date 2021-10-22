import React from 'react'
import { Card } from 'react-bootstrap';
import './Birthday.css'
function Birthday() {
    return (
        <div>
            <Card className="Bcard" style={{ width: '18rem' }}>
                <Card.Header className="bcardheading"><b><i>BirthDays</i></b></Card.Header>
                <Card.Body>
                    <Card.Text className="bcardtext">
                    <h6>Today sarath and Karthik Bday</h6>
                    <h6></h6>
                    <h6>Today sarath and Karthik Bday</h6>
                    <h6>Today sarath and Karthik Bday</h6>
                    <h6>Today sarath and Karthik Bday</h6>
                    <h6>Today sarath and Karthik Bday</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Birthday
