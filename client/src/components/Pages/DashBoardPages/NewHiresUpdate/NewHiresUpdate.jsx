import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './NewHiresUpdate.css'
import CardContent from '@mui/material/CardContent';





function NewHiresUpdate() {
    return (
        <div>
            <Card className="nhucard" style={{ width: '22rem' }}>
                <Card.Header className="nhucardheading"><b><i>New Hires Update</i></b></Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <Card sx={{ maxWidth: 50 }}>
                                <CardContent className="nhucandidate">
                                    <div className="image">
                                    <img src="/dumy.png" alt="dumy" className="pic"/>
                                    </div>
                                    <div className="mat">
                                        <Typography variant="h6" component="div">
                                            Sarath R
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            Developer
                                            <Typography variant="body2">
                                            Vizag
                                            </Typography>
                                        </Typography>
                                    </div>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">view</Button>
                                </CardActions>
                            </Card>
                        </Card.Text>
                    </Card.Body>
                <Card.Body>
                    <Card.Text>
                        <Card sx={{ maxWidth: 50 }}>
                            <CardContent className="nhucandidate">
                               <div className="image">
                                   <img src="/dumy.png" alt="dumy" className="pic"/>
                                </div>
                                <div className="mat">
                                    <Typography variant="h6" component="div">
                                        uday
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Developer
                                        <Typography variant="body2">
                                        VZM
                                        </Typography>
                                    </Typography>   
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button size="small">view</Button>
                            </CardActions>
                           
                        </Card>
                        
                    </Card.Text>
                </Card.Body>
                
                <Card.Body>
                    <Card.Text>
                        <Card sx={{ maxWidth: 50 }}>
                            <CardContent className="nhucandidate">
                               <div className="image">
                                   <img src="/dumy.png" alt="dumy" className="pic"/>
                                </div>
                                <div className="mat">
                                    <Typography variant="h6" component="div">
                                     karthik
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        software
                                        <Typography variant="body2">
                                        Hyd
                                        </Typography>
                                    </Typography>
                                   
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button size="small">view</Button>
                            </CardActions>
                        </Card>
                        
                    </Card.Text>
                </Card.Body>
                {/* <Card.Body>
                    <Card.Text>
                        <Card sx={{ maxWidth: 50 }}>
                            <CardContent className="nhucandidate">
                               <div className="image">
                                   <img src="/dumy.png" alt="dumy" className="pic"/>
                                </div>
                                <div className="content">
                                    <Typography variant="h6" component="div">
                                        Sarath
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        Developer
                                        <Typography variant="body2">
                                        Vizag
                                        </Typography>
                                    </Typography>
                                    
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button size="small">view</Button>
                            </CardActions>
                        </Card>
                        
                    </Card.Text>
                </Card.Body> */}
            </Card> 
            
            
        </div>
    )
}

export default NewHiresUpdate
