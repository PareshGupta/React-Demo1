import React, { Component, Fragment } from 'react';

export default class extends Component {
  render() {
    const { name, description, publishedOn } = this.props;

    return(
      <Fragment>
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>Published On: {publishedOn}</p>
        </div>
      </Fragment>      
    )
  }
}
