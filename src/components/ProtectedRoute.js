import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const userToken = Cookies.get('userToken')
  return (
    <Route
      {...rest}
      render={props =>
        userToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/start',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
