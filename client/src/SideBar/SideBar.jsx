import './sidebar.css';
import { Link } from 'react-router-dom';
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
                   <Link to="/admin/home" className="link">
                       <li className="sidebarListItem">
                           <HomeIcon className="sidebarIcon"/>
                           <span className="sidebarHeading">Home</span>
                        </li>
                    </Link> 
                    <Link to="/admin/selfservice" className="link">
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcon" />
                            <span className="sidebarHeading">self Services</span>
                        </li>
                    </Link>
                    <Link to="/admin/leavetracker" className="link">
                        <li className="sidebarListItem">
                            <ScheduleIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Leave Tracker</span>
                        </li>
                    </Link>
                    <Link to="/admin/timetracker" className="link">
                        <li className="sidebarListItem">
                            <TimerIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Time Tracker</span>
                        </li>
                    </Link>
                    <Link to="/admin/attendance" className="link">
                        <li className="sidebarListItem">
                            <EmojiPeopleIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Attendance</span>
                        </li>
                    </Link>
                    <Link to="/admin/performance" className="link">
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Performance</span>
                        </li>
                    </Link>
                    <Link to="/admin/files" className="link">
                        <li className="sidebarListItem">
                            <FilePresentIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Files</span>
                        </li>
                    </Link>
                    <Link to="/admin/organizationchart" className="link">
                        <li className="sidebarListItem">
                            <PieChartIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Organization Chart</span>
                        </li>
                    </Link>
                    <Link to="/admin/travel" className="link">
                        <li className="sidebarListItem">
                            <TravelExploreIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Travel</span>
                        </li>
                    </Link>
                    <Link to="/admin/compensation" className="link">
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon" />
                            <span className="sidebarHeading">Compensation</span>
                        </li>
                    </Link>
                    
                </ul>
            </div> 
            
        </div>
    </div>
  );
}
