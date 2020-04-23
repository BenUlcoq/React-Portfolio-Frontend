import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'

export default function Header() {

  return (
    <div>
      <Container>
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Container>
    </div>
   
  )

}