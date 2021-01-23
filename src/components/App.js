import React, {Component} from 'react';
import logo from './../logo.svg';
import LinkList from './LinkList.js'
import CreateLink from './CreateLink'
import {Switch, Route} from 'react-router-dom';
import Header from './Header.js'
import Login from './Login.js'

import './../styles/App.css';
const App = () => {
    return(
        <div className="center w85">
                <Header/>
                <div className="ph3 pv1 background-gray">
                        <Switch>
                                <Route exact path="/" component={LinkList} />
                                <Route
                                        exact
                                        path="/create"
                                        component={CreateLink}
                                />
                                <Route exact path="/login" component={Login} />
                        </Switch>
                </div>
        </div>
    )
}



export default App;
