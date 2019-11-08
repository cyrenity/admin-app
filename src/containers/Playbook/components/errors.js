import React from 'react';
import {connect} from 'react-redux';
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
    }
  }));


const Errors = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                props.errors.map((error, index) => (
                    <ListItem key={error.error + index}>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={error.error} 
                        />
                    </ListItem>
                ))
            }
        </List>
    )
}

export const ShowErrors = connect((state) => ({errors: state.errors}))(Errors)