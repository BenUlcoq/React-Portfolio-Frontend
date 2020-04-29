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
            <p style={{textAlign: 'justify', fontWeight: '300'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae elementum lorem, ut mollis dolor. Proin euismod erat nec nibh tristique posuere. Maecenas ultrices tempor ante placerat sagittis. Cras id purus sapien. Integer tincidunt pellentesque luctus. Aliquam erat volutpat. Quisque vestibulum vitae sapien non egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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