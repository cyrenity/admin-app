import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { fetchUsers } from './actions/user.js';
import Button from '@material-ui/core/Button';
import rootReducer from './reducers/root';
import apiMiddleware from './middleware/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ShowUsersList } from "./components/user";
import { ShowErrors} from "./components/errors";
import { ControlledContactsList } from "./components/contacts";
import { ControlledContactForm } from "./components/contactform"
import { ApiSpinner } from './components/spinner.js';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware)))

//const unsubscribe = store.subscribe(() => console.log(store.getState()))

class Playbook extends React.Component {
    render() { 
        return ( 
            <Provider store={store}>
                <ApiSpinner />
                <div>
                    <h1>Playbook </h1>
                    <hr />
                    <ShowErrors />
                    <Button onClick={() => store.dispatch(fetchUsers())}>Fetch UserList</Button>
                    <ShowUsersList />
                    <hr />
                    <ControlledContactForm />
                </div> 
                <ControlledContactsList />
            </Provider>         
        );
    }
}
 
export default Playbook;