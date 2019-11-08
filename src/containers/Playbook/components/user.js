import { connect } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {ListItem, ListItemText, List} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
    }
  }));


const Users = (props) => {
  const classes = useStyles();
  return (
      <List className={classes.root}>
        { props.users.map(user => 
          <ListItem key={user.username}> <ListItemText primary={user.name}  /></ListItem>  
          )
        }
      </List>
  )
}

export const ShowUsersList = connect((state) => ({users: state.users}))(Users)
