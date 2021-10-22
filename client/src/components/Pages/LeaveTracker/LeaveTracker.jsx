import React from 'react'
import "./LeaveTracker.css"
import { useState } from "react";
import {Card} from 'react-bootstrap'
import UpcomingHolidays from '../DashBoardPages/UpcomingHolidays/UpcomingHolidays';
import ApplyLeave from './Apply Leave/ApplyLeave';

function LeaveTracker() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

    return (
        
          <Card style={{ width: '100%' }}>
                <Card.Body>
                <div className="container">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Calendar
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Apply Leave
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Leave Status
                </button>
                <button
                  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(4)}
                >
                  Holidays List
                </button>
              </div>

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                <UpcomingHolidays className="cale"/> 
              </div>

                <div
                  className={toggleState === 2 ? "content  active-content" : "content"}
                >
                  <ApplyLeave />
                </div>
                <div
                  className={toggleState === 3 ? "content  active-content" : "content"}
                >
                  
                  Here we will Write the Leave status
                </div>


                <div
                  className={toggleState === 4 ? "content  active-content" : "content"}
                >
                  Here we will mention list of Holidays
                </div>
              </div>
              </div>
                    
                </Card.Body>
            </Card> 
           
          
        
    )
}

export default LeaveTracker
