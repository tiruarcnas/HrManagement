import React from 'react'
import "./Topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import LogoutIcon from '@mui/icons-material/Logout';

function Topbar() {
    return (
        <>
         <div className="topbar">
            <div className="topLeft">
                <span className="title">HRMS</span>
            </div>
            <div className="topright">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <div className="topbarIconContainer">
                   <LogoutIcon />
                </div>
            </div>
         </div>
            
        </>
    )
}

export default Topbar
