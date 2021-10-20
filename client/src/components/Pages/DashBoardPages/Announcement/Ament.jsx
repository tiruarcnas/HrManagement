import React from 'react'
import { Card } from 'react-bootstrap';
import './announc.css'

function Ament() {
    return (
        <div >
            <Card className="annou" style={{ width: '18rem' }}>
                <Card.Header><b>Announcement</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                    <h6>Welcome to arcnas</h6>
                    <p>their is a meeting today at 5pm</p>
                    </Card.Text>
                    <Card.Text>
                    <h6>Welcome to arcnas</h6>
                    <p>their is a meeting today at 5pm</p>
                    </Card.Text>
                    <Card.Text>
                    <h6>Welcome to arcnas</h6>
                    <p>their is a meeting today at 5pm</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Ament
