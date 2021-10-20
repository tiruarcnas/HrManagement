import React from 'react'
import {Card} from 'react-bootstrap'
import BasicInformation from './BasicInfromation/BasicInformation'
import WorkInformation from './Work Information/WorkInformation'
import PersonalInfo from './Personal Information/Personalinfo'
import HierarchyInformation from './Hierarchy Information/HierarchyInformation'
import './SelfServices.css'

function ServicesDashBoard() {
    return (
        <Card className="selfservicedashboard" style={{ width: '95%' }}>
                <Card.Body className="ssmaincard1">
                    <BasicInformation />  
                </Card.Body>
                <Card.Body className="ssmaincard2">
                    <WorkInformation />
                </Card.Body>
                <Card.Body className="ssmaincard3">
                    <HierarchyInformation />
                </Card.Body>
                <Card.Body className="ssmaincard4"> 
                    <PersonalInfo />  
                </Card.Body>
        </Card>
    )
}

export default ServicesDashBoard
