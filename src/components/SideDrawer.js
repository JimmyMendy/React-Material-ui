import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
//material-ui style
import { makeStyles} from '@material-ui/core';
//material-ui components
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SubjectOutlined} from '@material-ui/icons';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2)
    }
  }
})

export default function SideDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineIcon color="secondary" />,
      path: '/create'
    }
  ]

  return (
    <Drawer 
      className={classes.drawer}
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper}}
    >
      <div>
        <Typography variant="h5" className={classes.title}>
          Ninja Notes
        </Typography>
      </div>

      {/* List / links */}
      <List>
        {menuItems.map(item => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname == item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}/>
          </ListItem>
        ))}
      </List>
      
    </Drawer>
  )
}
