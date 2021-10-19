import React from 'react'
import {Card, Table, Form} from 'react-bootstrap'

function WorkInformation() {
  return (
      <div className="workinfo">
             <Card className="work" style={{ width: '100%' }}>
                <Card.Header><b>Work Information</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div className="table">
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Department</th>
                                        <th>Location</th>
                                        <th>Designation</th>          
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td>IT</td>
                                        <td>Vizag</td>
                                        <td>junior software</td>
                                    </tr>
                                    <tr>
                                        <td>Networking</td>
                                        <td>Vizag</td>
                                        <td>Senior</td>    
                                    </tr>
                                    <tr>
                                        <td>IT</td>
                                        <td>Hyderbad</td>
                                        <td>developer</td>  
                                    </tr>
                                    <tr>
                                        <td>Electrical</td>
                                        <td>Vizag</td>
                                        <td>maintance Engineering</td>
                                    </tr>
    
     
    </tbody>
  </Table>
  </div>
                     
                    </Card.Text>
                </Card.Body>
            </Card>            
        </div>
  )
}

export default WorkInformation
