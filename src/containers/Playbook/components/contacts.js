import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem, ListItemAvatar, ListItemText, Avatar} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
    secondaryColor: {
        color: '#9575cd',
    }
  }));

const Contacts = (props) => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {
                props.contacts.map((contact, index) => (
                    <ListItem key={contact.phone + contact.name}>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={contact.name} 
                            secondary={contact.phone} 
                            classes={{ secondary: classes.secondaryColor }} 
                        />
                    </ListItem>
                ))
            }
        </List>
    )
}

export const ControlledContactsList = connect((state) => ({contacts: state.contacts}))(Contacts)
