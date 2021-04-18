import React from 'react';
//material-ui/style
import { makeStyles} from '@material-ui/core';
//material-ui components
//components
import Appbar from '../components/Appbar';
import SideDrawer from '../components/SideDrawer';


const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex'
    },
    page: {
      background: '#f9f9f9',
      width: "100%",
      padding: theme.spacing(3)
    },
    toolbar: theme.mixins.toolbar
  }
})

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Appbar />
      <SideDrawer />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}
