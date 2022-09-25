import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import isLogin from '../utils/isLogin';

export default function PublicRoute({Component, restricted, ...rest}) {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to='/dashboard' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
