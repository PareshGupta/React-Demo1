import React, { Component, Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Writers from './Writers';
import NotFound from './Error/404';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      writers: []
    }
  }

  async componentDidMount() {
    const writers = await(await fetch("http://localhost:3004/writers")).json();

    this.setState({writers: writers});
  }

  render() {
    const { writers } = this.state;

    return(
      <BrowserRouter>
        <Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>
  
          <hr/>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/writers" render={
              props => <Writers { ...props } writers={writers} />
            } />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}
