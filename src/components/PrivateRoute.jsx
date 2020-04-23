import React from "react";
import { Route } from "react-router-dom"
import JWT from 'jsonwebtoken'

export default function PrivateRoute(props) {
  
  const verifyToken = () => {

    // TODO - IMPROVE VERIFICATION, OBVIOUSLY
      let token = localStorage.getItem('authToken')
      
      return (token ?  true :  false)

  }

  return (

    verifyToken("authToken") ? (
      props.reverse ? (
        <>
          {props.redirect("/admin")}
        </>
      ) : (
        <Route {...props} render={ innerProps => <props.component {...innerProps} />} />
      )
    ) : (
      props.reverse ? (
          <Route {...props} render={ innerProps => <props.component {...innerProps} />} />
      ) : (
        <>
          {props.redirect("/admin/login")}
        </>
      )
    )
  )
}


