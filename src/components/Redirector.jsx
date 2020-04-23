import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Redirector(props) {

  if(props.redirect) {
    let redirect = props.redirect
    props.setRedirect(null)
    return <Redirect to={redirect} />
  }

  return (
    <>
    </>
  )
}