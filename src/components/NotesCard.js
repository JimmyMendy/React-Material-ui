import React from 'react';
//material-ui/style
import { Avatar, makeStyles } from '@material-ui/core';
//Material-ui components
import Paper from '@material-ui/core/paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, yellow, pink } from '@material-ui/core/colors';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      switch(note.category) {
        case 'work':
          return yellow[700]
        case 'money':
          return green[500]
        case 'todos':
          return pink[500]
        default:
          return blue[500]
      }
    }
  }
})

export default function NotesCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1} >
        <CardHeader 
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

