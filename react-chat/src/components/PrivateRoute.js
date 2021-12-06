import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute(props) {
  console.log(props);
  if(props.user) { //if logged in
    return <Route {...props} />
  }
  else if(props.user === undefined) {
    return null;
  }
  else {
    return <Redirect to="/"/>
  }
}