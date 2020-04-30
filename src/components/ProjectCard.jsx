import React from 'react'
import {Grid, Paper, Box, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { HashLink as Link } from 'react-router-hash-link'
import _ from 'lodash'

export default function ProjectCard(props) {

  const useStyles = makeStyles({
    button: {
        transition: 'all 0.1s ease-out',
        color: '#FFB402',
        padding: '15px',
        margin: '20px',
        border: '1px solid',
        borderRadius: '0',
        width: '75%',
        fontWeight: 700,
        letterSpacing: '4px',
        '&:hover': {
          transition: 'all 0.1s ease-out',
          border: '1px solid #FFB402',
          color: '#171637',
          backgroundColor: 'orange'
        }
      }
    })

  const classes = useStyles()

  const project = props.project

  const mouseEnter = (e) => {
    props.setHovered(project._id)
  }

  const mouseLeave = (e) => {
    props.setHovered(null)
  }

  const isHovered = () => {
    return (project._id === props.hovered ? true : false)
  }

  const notHoveredStyle = {
    box: {
      transition: 'all 0.2s ease-out',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 0,
      // width: '260px'
    },
    img: {
      opacity: 1,
      zIndex: 3,
    },
    overlay: {
      transition: 'all 0.2s ease-out',
      height: '150%',
      width: '100%',
      position: 'absolute',
      background: 'linear-gradient(180deg, rgba(94, 101, 165, 0.47) 0%, rgba(21, 27,74,1) 89.58%)',
      top: 0,
      zIndex: 6
    },
    default: {
      transition: 'all 0.2s ease-out',
      height: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      flexFlow: 'row wrap',
      alignContent: 'flex-end',
      padding: '20px',
      zIndex: 10,
      bottom: 0,
      margin: 'auto'
    },
    button: {
      display: 'none',
    }
  }

  const addStyles = {
    box: {
      transform: 'scale(1.05)',
      transition: 'all 0.25s ease-out',
    },
    img: {
      opacity: 0.5
    },
    overlay: {
      transition: 'all 0.25s ease-out',
      top: '-50%'
    },
    default: {
      // alignContent: 'center',
      transition: 'all 0.25s ease-out',
      transform: 'translateY(-25%)'
      // bottom: '25%'
    },
    button: {
      display: 'block'
    }
  }

  const titleStyle = {
    width: '100%',
    margin: 0,
    fontSize: '1.5em',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: 'white',
    textDecoration: 'none',
    letterSpacing: '6px',


  }

  const subtitleStyle = {
    margin: 0,
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'white',
    width: '100%',
    fontWeight: 500,
    fontSize: '0.8em'
  }

  const hoveredStyle = _.merge({}, notHoveredStyle, addStyles)

  return (
    <Grid key={project._id}  item xs={12} sm={12} md={6} lg={4}>
      <Link style={{textDecoration: 'none'}} to={`/projects/${project._id}`}>
        <Paper style={isHovered() ? hoveredStyle.box : notHoveredStyle.box } elevation={isHovered() ? 8 : 3}>
          <Box height={'500px'} id={project._id} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <Box style={isHovered() ? hoveredStyle.default : notHoveredStyle.default } className={'default'}>
                <h1 style={titleStyle}>{project.title}</h1>
                <h3 style={subtitleStyle}>{project.subtitle}</h3>
                <Button className={classes.button} style={isHovered() ? hoveredStyle.button : notHoveredStyle.button }>View Project</Button>
            </Box>
            <Box style={isHovered() ? hoveredStyle.overlay : notHoveredStyle.overlay } className={'overlay'}>
  
            </Box>
            <Box className={'background'}>
              <img alt={`${project.title} feature`} style={{position: 'absolute', objectFit: 'cover', width: '100%', height: '100%', top: 0}} src={project.featured.url} width={100}/>
            </Box>
          </Box>
        </Paper>
      </Link>
    </Grid>
  )
}