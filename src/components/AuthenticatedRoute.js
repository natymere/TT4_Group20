import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {

  const isLogin = () => {
    // check authenticated return true or false
  }

  return (
    <Route
      {...rest}
      render={(props) => isLogin() ? <Component {...props} /> : <Redirect to="/Login" />}
    />
  );
}

export default AuthenticatedRoute;