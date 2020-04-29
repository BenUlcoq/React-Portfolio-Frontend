import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../config/axios-config'
import Projects from '../../Projects'
import { Container, Box } from '@material-ui/core'
import { CSSTransitionGroup } from 'react-transition-group'

export default function ProjectsPage() {

  const [ projects, setProjects ] = useState()
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    let queryString = tags
    // setLoading(true)
    API.get(
      `/projects/tags/${queryString}`
    )
    .then((res) => {
      // TODO - REMOVE TIMEOUT
      setTimeout(function(){ setProjects(res.data.projects)}, 2000)
      
      // setLoading(false)
    })
    .catch((err) => {
      // setLoading(false)
      // props.redirect('/404')
    })
  }, [tags])

  return (
    <Box padding={'5% 0'}>
      <Container>
        <h1 style={{fontSize: '4em', textAlign: 'center'}}>Projects</h1>
        { projects ? 
          <Projects projects={projects} />
        : <div style={{position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', top: 0, left: 0, bottom: 0, right: 0}}><div class="lds-ripple"><div></div><div></div></div></div> }
        <button onClick={() => {
          setProjects(null)
          console.log('clicked')
          tags.includes('yeet') ? setTags('404') : setTags('yeet')
          }}></button>
      </Container>
    </Box>
  )

}