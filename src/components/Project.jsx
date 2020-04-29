import React, { useEffect, useState } from 'react'
import { Paper, Box, Container, Button, Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkButton from './LinkButton'
import Carousel from './Carousel'

const useStyles = makeStyles({
  root: {
      background: 'linear-gradient(270deg, #FFB800 0%, #FF5C00 100%)',
      border: 0,
      borderRadius: 50,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      width: '100%',
      margin: '10px auto'
    },
  });

export default function Project(props) {

  const classes = useStyles()
  
  const project = props.project

  return (
    <>
            <Paper margin={'5% 0'} elevation={8} >
              <Box height={'100%'} display="flex" flexDirection="row" flexWrap="wrap" alignItems={'center'}>
                <Box style={{flexBasis: '350px', padding: '5% 0'}} flexGrow={1} minWidth={'300px'} order={1}>
                  <Box order={1}>
                    <Container>
                      <Container>
                        <h1 style={{marginBottom: 0, fontSize: '2.5em', fontWeight: 700}}>{project.title}</h1>
                        <h3 style={{margin: 0, textTransform: 'uppercase', fontWeight: 500}} >{project.subtitle}</h3>
                      </Container>
                    </Container>
                  </Box>

                  <Box order={2}>
                    <Container>
                      <Container>
                      <p style={{fontWeight:300}} >{project.description}</p>
                      {/* <ul>
                        {project.tags.map((tag) => {
                          return <li>{tag}</li>
                        })}
                      </ul> */}
                      <Box style={{margin: '0px -10px'}} display="flex" flexDirection="row" flexWrap="wrap" justifyContent={'space-between'} alignItems={'center'}>
                      {project.link ? 
                      <LinkButton order={1} width={'40%'} link={project.link}>View Live Project</LinkButton>
                      : null}

                      {project.github ? 
                      <LinkButton order={2} width={'40%'} link={project.github} icon={<GitHubIcon />}>View on Github</LinkButton>
                      : null }
                      </Box>
                      </Container>
                    </Container>
                  </Box>
                </Box>
                <Box style={{flexBasis: '500px', position: 'relative'}} height={"80vh"} width={2/3} flexGrow={2} order={2} maxHeight={'70vw'}>
                  {/* <img src={project.featured.url} style={{'object-fit': 'cover', width: '100%', height: '100%'}}/> */}
                  
                  <Carousel media={project.media}/>

                  {/* TODO - Slider */}
                  {/* {project.media.map((item) => {
                  return <img src={item.url} width={50}/>
                  })} */}

                </Box>
              </Box>
          </Paper>
      </>
  )

}