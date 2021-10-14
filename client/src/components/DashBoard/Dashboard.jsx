import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InsightsIcon from '@mui/icons-material/Insights';
import FolderIcon from '@mui/icons-material/Folder';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Router, Switch, Route } from 'react-router-dom';

import Home from '../../Pages/Home';
const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        {/* modile response */}
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}

            <Divider />
            <Button href="/Home">
              {' '}
              <HomeIcon />
              Home
            </Button>

            <Button href="#">
              {' '}
              <PersonRoundedIcon />
              Self Service
            </Button>
            <Button href="#">
              {' '}
              <PermContactCalendarIcon />
              Leave Tracker
            </Button>
            <Button href="#">
              {' '}
              <ScheduleIcon />
              Time Tracker
            </Button>
            <Button href="#">
              {' '}
              <DateRangeIcon />
              Attendance
            </Button>
            <Button href="#">
              {' '}
              <InsightsIcon />
              Performance
            </Button>
            <Button href="#">
              {' '}
              <FolderIcon />
              Files & HR Documention
            </Button>
            <Button href="#">
              {' '}
              <ShowChartIcon />
              Organization Chart
            </Button>
            <Button href="#">
              {' '}
              <FlightTakeoffIcon />
              Travel
            </Button>
            <Button href="#">
              {' '}
              <AttachMoneyIcon />
              Compensation
            </Button>
          </Drawer>
        </Hidden>
        {/* dasktop  */}
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}

            <Button href="/Home">
              {' '}
              <HomeIcon />
              Home
            </Button>

            <Button href="#">
              {' '}
              <PersonRoundedIcon />
              Self Service
            </Button>
            <Button href="#">
              {' '}
              <PermContactCalendarIcon />
              Leave Tracker
            </Button>
            <Button href="#">
              {' '}
              <ScheduleIcon />
              Time Tracker
            </Button>
            <Button href="#">
              {' '}
              <DateRangeIcon />
              Attendance
            </Button>
            <Button href="#">
              {' '}
              <InsightsIcon />
              Performance
            </Button>
            <Button href="#">
              {' '}
              <FolderIcon />
              Files & HR Documention
            </Button>
            <Button href="#">
              {' '}
              <ShowChartIcon />
              Organization Chart
            </Button>
            <Button href="#">
              {' '}
              <FlightTakeoffIcon />
              Travel
            </Button>
            <Button href="#">
              {' '}
              <AttachMoneyIcon />
              Compensation
            </Button>
          </Drawer>
        </Hidden>
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />
          ddd
        </main> */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
