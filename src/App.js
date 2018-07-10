import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import getItems from './components/getItems'
import fakeLogin from './components/fakeLogin'

//Points about Router
//  * BrowserRouter should wrap the main component, i.e. <App/>
//  * Route specifies route from url, it will render the component mentioned. 'exact' means complete match.
//  * Switch is switch case, so it one route matches then it will stop checking more routes. 
//  * Link is link.

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" render={
                            () => (
                                <React.Fragment>
                                    <Link to='/fakeLogin'>Fake Login</Link> <br />
                                    <Link to='/getItems'>Get Items</Link>
                                </React.Fragment>
                            )
                        } />
                        <Route exact path='/getItems' component={getItems} />
                        <Route exact path='/fakeLogin' component={fakeLogin} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App