import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLoggedIn } from '../../appSelectors';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/login?redirect=${props.location.pathname}`} />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn()
});

export default connect(
  mapStateToProps,
  null
)(AuthenticatedRoute);
