import React from 'react'
import { Box } from '@material-ui/core'
import { LinkedIn, GitHub, Email } from '@material-ui/icons';
import { HashLink as Link } from 'react-router-hash-link'
import Logo from '../Logo'

const footerStyle = {
  background: '#171637',
  'box-shadow': 'none',
  // height: '75px',
  top: 'auto',
  bottom: 0,
  padding: '10px 0'
}

export default function Footer() {

  return (
      <div style={footerStyle}>
        <Box height={'100%'} width={'100%'} display="flex" flexWrap={'wrap'} flexDirection="row" justifyContent={'center'} alignItems={'space-around'}>
          <Box display="flex" flexDirection="row" justifyContent={'center'} width={'100%'}>
            <Link style={{margin: '10px'}} to="/">
              <Logo color={'white'}></Logo>
            </Link>
          </Box>
          <Box width={'100%'} display="flex" flexDirection="row" justifyContent={'center'} alignItems={'center'}>
            <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/ben-ulcoq/">
                <LinkedIn fontSize="large" style={{color: '#FF9302', margin: '10px'}}></LinkedIn>
            </a>
            <a rel="noopener noreferrer" target='_blank' href="https://github.com/BenUlcoq">
                <GitHub fontSize="large" style={{color: '#FF9302', margin: '10px'}}></GitHub>
            </a>
            <a rel="noopener noreferrer" target='_blank' href="mailto:ben.ulcoq@gmail.com">
                <Email style={{color: '#FF9302', margin: '10px'}}></Email>
            </a>
          </Box>
          </Box>
      </div>
  )

}