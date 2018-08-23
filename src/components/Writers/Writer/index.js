import React, { Component, Fragment } from 'react';

export default class extends Component {
  render() {
    const { dob, id, name } = this.props;

    return(
      <Fragment>
        <div>
          <h2>{name}</h2>
          <strong>{dob}</strong>
        </div>
      </Fragment>
    )
  }
}
