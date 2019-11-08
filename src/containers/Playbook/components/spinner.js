import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2),
  },
  placeholder: {
    height: 40,
  },
  spinner: {
      margin: 0,
  }
}));

const Spinner = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.spinner}>
            <Fade
                in={props.loading}
                style={{
                transitionDelay: props.loading ? '0ms' : '0ms',
                }}
                unmountOnExit
            >
                <LinearProgress />
            </Fade>
        </div>
    );
}

export const ApiSpinner = connect((state) => ({loading: state.ui.pendingRequests > 0 ? true:false}))(Spinner)
