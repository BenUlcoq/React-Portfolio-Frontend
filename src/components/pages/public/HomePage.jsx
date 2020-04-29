import React, {useEffect, useState} from 'react'
import Projects from '../../Projects'
import API from '../../../config/axios-config'
import {Container} from '@material-ui/core'
import About from '../../About'
import Landing from '../../Landing'

export default function HomePage() {

  const [ projects, setProjects ] = useState()
  const [ tags, setTags ] = useState([])

  useEffect(() => {
    let queryString = tags
    // setLoading(true)
    API.get(
      `/projects/tags/${queryString}`
    )
    .then((res) => {
      setProjects(res.data.projects)
      // setLoading(false)
    })
    .catch((err) => {
      setTags([])
      // setLoading(false)
      // props.redirect('/404')
    })
  }, [tags])

  return (
    <Container>
      <Landing/>
      <div id='projects' className={'projects'} style={{position: "relative", minHeight: '500px', padding: '5% 0'}}>
      <h1 style={{fontSize: '3.5em', textAlign: 'center', marginTop: 0}}>Projects</h1>
      { projects ? 
        <Projects projects={projects} />
      : <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div class="lds-ripple"><div></div><div></div></div></div> }
      </div>
      <div style={{padding: '5% 0', width: '100vw', margin: '0 calc( -50vw + 50% )', background: 'rgb(234, 234, 234)'}}>
        <About/>
      </div>
    </Container>
  )

}