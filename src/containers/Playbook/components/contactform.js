import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { addContact } from "../../../actions/contacts";

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },    
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },  
      button: {
          margin: theme.spacing(1),
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
      secondaryColor: {
        color: '#9575cd',
    }
  }));

//ContactForm 
const ContactForm = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat',
        phone: '051',
        phoneValid: true,
        nameValid: true,
      });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.id]: event.target.value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (e.target.elements.name.value === "") {
            console.log("name is not provided")
            setValues({...values, nameValid: !values.nameValid})
        }

        if (e.target.elements.phone.value === "") {
            console.log("phone is not provided")
            setValues({...values, phoneValid: !values.phoneValid})
        }

        if (values.phoneValid && values.nameValid) {
            setValues({...values, name: '', phone: ''})
            props.addContact({name: e.target.elements.name.value, phone: e.target.elements.phone.value})
        }
    }

    return (
        <span>
            <form onSubmit={handleSubmit} className={classes.container} autoComplete='off'>
                <TextField
                    id="name"
                    label="Full name"
                    className={classes.textField}
                    margin="normal"
                    value={values.name}
                    onChange={handleChange}
                />
                <TextField
                    id="phone"
                    label="Phone number"
                    className={classes.textField}
                    margin="normal"
                    value={values.phone}
                    onChange={handleChange}
                />      
                <Button type='submit' variant="contained" className={classes.button}>Add Contact</Button>      
            </form>
        </span>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
      addContact: (payload) => { dispatch(addContact(payload)) }
    }
  }

export const ControlledContactForm = connect(null, mapDispatchToProps)(ContactForm)