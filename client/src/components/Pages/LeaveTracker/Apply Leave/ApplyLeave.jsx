import React from 'react'
import { Card,Form,Row,Col } from 'react-bootstrap';
//import ResponsiveDateRangePicker from '../Apply Leave/Datepicker'
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import DesktopDateRangePicker from '@mui/lab/DesktopDateRangePicker';

function ApplyLeave() {
  const [value, setValue] = React.useState(new Date());
  return (
    <div>
      <Card className="bsccard" style={{ width: '65%' }}>
                <Card.Body>
                    <Card.Text>
                    <Form>
                      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                        Employee Name
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control type="name" placholder="Employee Name"/>
                        </Col>
                      </Form.Group>
                      {/* <DesktopDatePicker
          label="For desktop"
          value={value}
          minDate={new Date('2017-01-01')}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
                      
                    </Form>
                    </Card.Text>
                </Card.Body>
            </Card> 
      
    </div>
  )
}

export default ApplyLeave
