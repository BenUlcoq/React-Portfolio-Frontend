import React from 'react'
import { Box } from '@material-ui/core'
import { LinkedIn, GitHub, Email } from '@material-ui/icons';

export default function About() {

  const objectStyle = {
    background: '#171637',
    height: '40%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    transform: 'skewX(-10deg)',
    right: '6%'
  }

  return (
        <Box id={'about'} position={'relative'} width={'100%'} display="flex" flexDirection="row" flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
          
          <Box display={'flex'} justifyContent={'center'} flexBasis={'30%'}>
            <Box style={{maxWidth: '300px', position: 'relative', minWidth: '200px'}} >
              <img alt='Ben Ulcoq Portrait Shot' style={{width: '100%', objectFit: 'contain', zIndex: 4, position: 'relative', marginBottom: '-4px'}} src={"PhotoSmall-crop.png"}></img>
              <div style={objectStyle}></div>
            </Box>
          </Box>

        <Box maxWidth={'500px'} flexGrow={2} flexBasis={'70%'} style={{margin: '5% 0'}} alignSelf={'flex-end'}>
          <Box className={'about-me'} style={{padding: '0 5%', display: 'flex', alignItems: 'center'}}>
            <h1 style={{fontSize: '3.5em', margin: '0'}}>About Me</h1>
            <p style={{textAlign: 'justify', fontWeight: '300'}}>Hi there! I’m Ben Ulcoq, an aspiring full-stack developer  from Brisbane. I’m a recent graduate of Coder Academy’s Fast Track Bootcamp Program. I completed a Bachelor of Digital Media at CQ University and after working as a Graphic Designer for two years I’m looking to make a change into a development role.
            <br></br>
            I’m currently seeking full-time employment as a developer, so have a look around and feel free to reach out if you’ve got any exciting opportunities or questions for me!</p>
            <Box display="flex" flexDirection="row" alignItems={'center'} width={'35%'} justifyContent='space-between'>
              <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/ben-ulcoq/">
                  <LinkedIn fontSize="large" style={{color: '#FF9302'}}></LinkedIn>
              </a>
              <a rel="noopener noreferrer" target='_blank' href="https://github.com/BenUlcoq">
                  <GitHub fontSize="large" style={{color: '#FF9302'}}></GitHub>
              </a>
              <a rel="noopener noreferrer" target='_blank' href="mailto:ben.ulcoq@gmail.com">
                  <Email fontSize="large" style={{color: '#FF9302'}}></Email>
              </a>
            </Box>
          </Box>
        </Box>
          
        </Box>
  )

}