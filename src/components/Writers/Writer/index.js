import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

import NotFound from '../../Error/404';
import Book from './Book'

export default class extends Component {
  render() {
    const { dob, id, name, books, match: { url } } = this.props;

    return(
      <Fragment>
        <div>
          <h2>
            {name}
          </h2>
          <span>Date of birth:
            <b> {dob}</b>
          </span>

          <ul>
            {books.map(
              ({ id, name }) =>
                <li>
                  <Link to={`${url}/books/${id}`}>{name}</Link>
                </li>
            )}
          </ul>
        </div>

        <Route path={`${url}/books/:bookId`} render={
          props => {
            const book = books.find(book => book.id === props.match.params.bookId)

            if (!book) {
              return <NotFound />;
            }

            return(<Book {...book} />);
          }
        }/>
      </Fragment>
    )
  }
}
