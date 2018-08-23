import React, { Component, Fragment } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Writer from './Writer';
import NotFound from '../Error/404';

export default class extends Component {
  getWriter(writerId) {
    return(
      this.props.writers
                .find(
                  writer => writer.id === writerId
                )
    );
  }

  render() {
    const { writers } = this.props;
    const { match: { url } } = this.props;

    return(
      <Fragment>
        <h1>List of Writers</h1>
        
        <ul>
          { writers.map(({id, name}) =>
              <li key={id}>
                <Link to={`${url}/${id}`}>{name}</Link>
              </li>
          )}
        </ul>

        <Switch>
          <Route exact path={url} render={
            () => <h4>Please select a writer from above.</h4>
          } />

          <Route path={`${url}/:writerId`} render={
            props => {
              const writer = this.getWriter(props.match.params.writerId);

              if (!writer) {
                return <NotFound />
              }

              return <Writer {...props} {...writer} />
            }
            // props => <Writer { ...props } writer={this.getWriter(props.match.params.writerId)} />
          } />
        </Switch>
      </Fragment>
    )
  }
}
