import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Route, Redirect } from 'react-router-dom';

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

const mapStateToProps = state => ({
  isLoggedIn: state.app.isLoggedIn
});

export default connect(
  mapStateToProps,
  null
)(UnauthenticatedRoute);
