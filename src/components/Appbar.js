import React from 'react';
// Material-ui styles
import { makeStyles } from '@material-ui/core/styles';
// Material-ui Component
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
//date-fns
import { format } from 'date-fns';

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - 240px)`
    },
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
}) 

export default function Appbar() {
  const classes = useStyles();

  return (
    <AppBar 
      className={classes.appbar} 
      elevation={0}
    >
      <Toolbar>
        <Typography className={classes.date}>
          Today is the { format(new Date(), 'do MMMM Y') }
        </Typography>
        <Typography>
          Mario
        </Typography>
        <Avatar src="/mario.png" className={classes.avatar}/>
      </Toolbar>
    </AppBar>
  )
}

