import React from 'react';
import { fetchUsers } from '../../actions/user.js';
import Button from '@material-ui/core/Button';
import { ShowUsersList } from "./components/user";
import { ShowErrors} from "./components/errors";
import { ControlledContactsList } from "./components/contacts";
import { ControlledContactForm } from "./components/contactform"
import { ApiSpinner } from './components/spinner.js';
import { connect } from 'react-redux';

//const unsubscribe = store.subscribe(() => console.log(store.getState()))

class Playbook extends React.Component {
    render() { 
        return ( 
            <div>
                <ApiSpinner />
                <div>
                    <h1>Playbook </h1>
                    <hr />
                    <ShowErrors />
                    <Button onClick={() => this.props.onClick()}>Fetch UserList</Button>
                    <ShowUsersList />
                    <hr />
                    <ControlledContactForm />
                </div> 
                <ControlledContactsList />
            </div>
        );
    }
}

function mapStateToProps(state) {}
function mapDispatchToProps(dispatch) {
    return {
        onClick: () => dispatch(fetchUsers())
    }
}

export default connect(null, mapDispatchToProps)(Playbook);