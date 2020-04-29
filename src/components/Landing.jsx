import React from 'react'
import {Container, IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Landing() {
  
  const divStyle = {
    padding: '5% 0', 
    height: '100%',
    width: '100%',
    background: 'radial-gradient(at left top, rgba(84, 102, 149, 0.92) 0%, rgba(31, 45, 81, 0.92) 33.29%, rgb(1, 1, 6) 100%) 0% 0% / cover, url(code.png)',
    filter: 'blur(4px)',
    position: 'relative'
  }

  // useEffect(() => {
  //   scrollListen()
  // }, [])

  // function scrollListen() {

  //   window.addEventListener('scroll', (event) => {
  //     setHidden(true)
  //   })
  
  // }

  // const [hidden, setHidden] = useState(false)

  return (
      <>
        <div style={{overflow: 'hidden', position: 'relative', height: '100vh', width: 'calc( 100vw + 30px )', margin: '0 calc( -50vw + 50% - 15px )'}}>
          <div style={divStyle}></div>
          <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: 10, top: 0, bottom: 0, left: 0, right: 0}}>
            <Container style={{height: '100%'}}>
              <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexFlow: 'row wrap'}}>
                <h1 style={{width: '100%', fontSize: '3em', textAlign: 'center', color: 'white', fontWeight: 300, margin: 0}}>Hi.</h1>
                <h1 style={{width: '100%', fontSize: '5em', textAlign: 'center', color: 'white', margin: 0}}> Im Ben.</h1>
                <h2 style={{width: '100%', fontSize: '2em', textAlign: 'center', color: 'white', fontWeight: 300}}>I'm a Developer.</h2>
                <a href='#projects'><IconButton disableRipple size='large' style={{color: '#FF9302', width: '50px', padding: '5px'}}><ExpandMoreIcon fontSize='large' /></IconButton></a>
              </div>
              
            </Container>
          </div>
        </div>
      </>
  )

}