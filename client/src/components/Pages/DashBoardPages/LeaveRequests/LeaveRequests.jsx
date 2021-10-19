import React from 'react';
import { Card,Table,Form,FloatingLabel } from 'react-bootstrap';
import './LeaveRequests.css'

function LeaveRequests() {
    return (
        <div>
             <Card className="leaverequest" style={{ width: '100%' }}>
                <Card.Header><b>Leave Request</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div className="table">
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>EMP ID</th>
                                        <th>Employee Name</th>
                                        <th>From</th>
                                        <th>TO</th>
                                        <th>Reason</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Murali Mohan</td>
                                        <td>25/05/2021</td>
                                        <td>27/05/2021</td>
                                        <td>Going out of station</td>
                                        <td>
                                        <Form.Select >
                                            <option value="1">Pending</option>
                                            <option value="2">Accepted</option>
                                            <option value="3">Rejected</option>
                                        </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sarath</td>
                                        <td>30/05/2021</td>
                                        <td>2/06/2021</td>
                                        <td>Going home due to some function</td>
                                        <td>
                                        <Form.Select >
                                            <option value="1">Pending</option>
                                            <option value="2">Accepted</option>
                                            <option value="3">Rejected</option>
                                        </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>trupthi</td>
                                        <td>29/05/2021</td>
                                        <td>2/06/2021</td>
                                        <td>going to visit temple</td>
                                        <td>
                                        <Form.Select >
                                            <option value="1">Pending</option>
                                            <option value="2">Accepted</option>
                                            <option value="3">Rejected</option>
                                        </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Karthik</td>
                                        <td>31/05/2021</td>
                                        <td>2/06/2021</td>
                                        <td>Not feeling well</td>
                                        <td>
                                        <Form.Select >
                                            <option value="1">Pending</option>
                                            <option value="2">Accepted</option>
                                            <option value="3">Rejected</option>
                                        </Form.Select>
                                        </td>
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

export default LeaveRequests
