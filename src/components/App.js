import React, {Component} from 'react';
import logo from './../logo.svg';
import LinkList from './LinkList.js'
import CreateLink from './CreateLink'
import {Redirect, Switch, Route} from 'react-router-dom';
import Header from './Header.js'
import Login from './Login.js'
import Search from './Search'
import './../styles/App.css';

const App = () => {
    return(
        <div className="center w85">
                <Header/>
                <div className="ph3 pv1 background-gray">
                        <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={() => <Redirect to="/new/1" />}
                                    />
                                <Route
                                        exact
                                        path="/create"
                                        component={CreateLink}
                                />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/search" component={Search} />
                            <Route
                                exact
                                path="/new/:page"
                                component={LinkList}
                            />
                            <Route
                                exact
                                path="/top"
                                component={LinkList}
                            />
                        </Switch>
                </div>
        </div>
    )
}



export default App;
