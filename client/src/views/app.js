import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import StreamShow from './';

function App() {

    return (

        <Fragment>

            <Router history={ history }>

                <Switch>

                    <Route exact path="/"
                        render={(props) => {
                        return (<StreamShow {...props}/>);
                    }}/>

                </Switch>

            </Router>

        </Fragment>

    );

}

export default App;

