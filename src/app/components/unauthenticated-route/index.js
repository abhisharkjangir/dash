import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Route, Redirect } from 'react-router-dom';
import { makeSelectIsLoggedIn } from '../../appSelectors';
import { createStructuredSelector } from 'reselect';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  let query = queryString.parse(rest.location.search);

  return (
    <Route
      {...rest}
      render={props =>
        !rest.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={query.redirect || '/'} />
        )
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn()
});

export default connect(
  mapStateToProps,
  null
)(UnauthenticatedRoute);
