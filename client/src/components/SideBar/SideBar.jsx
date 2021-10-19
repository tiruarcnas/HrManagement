import './sidebar.css';

import ListAltIcon from '@material-ui/icons/ListAlt';
import RestoreIcon from '@material-ui/icons/Restore';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import AlarmIcon from '@material-ui/icons/Alarm';
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TimerIcon from '@mui/icons-material/Timer';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PieChartIcon from '@mui/icons-material/PieChart';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
               <ul className="sidebarList">
                    <Link to="/dashboard" className="link">
                        <li className="sidebarListItem">
                            <HomeIcon className="sidebarIcon" />
                            Dashboard
                        </li>
                    </Link>
                    <Link to="/selfservice" className="link">
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon" />
                            self Services
                        </li>
                    </Link>
                    <Link to="/leavetracker" className="link">
                        <li className="sidebarListItem">
                            <ScheduleIcon className="sidebarIcon" />
                            Leave Tracker
                        </li>
                    </Link>
                    <Link to="/timetracker" className="link">
                        <li className="sidebarListItem">
                            <TimerIcon className="sidebarIcon" />
                            Time Tracker
                        </li>
                    </Link>
                    <Link to="/attendance" className="link">
                        <li className="sidebarListItem">
                            <EmojiPeopleIcon className="sidebarIcon" />
                            Attendance
                        </li>
                    </Link>
                    <Link to="/performance" className="link">
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon" />
                            Performance
                        </li>
                    </Link>
                    <Link to="/files" className="link">
                        <li className="sidebarListItem">
                            <FilePresentIcon className="sidebarIcon" />
                            Files
                        </li>
                    </Link>
                    <Link to="/organizationchart" className="link">
                        <li className="sidebarListItem">
                            <PieChartIcon className="sidebarIcon" />
                            Organization Chart
                        </li>
                    </Link>
                    <Link to="/travel" className="link">
                        <li className="sidebarListItem">
                            <TravelExploreIcon className="sidebarIcon" />
                            Travel
                        </li>
                    </Link>
                    <Link to="/compensation" className="link">
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon" />
                            Compensation
                        </li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    </div>
  );
}
