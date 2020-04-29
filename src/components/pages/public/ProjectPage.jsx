import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../config/axios-config'
import Project from '../../Project'
import { Container } from '@material-ui/core'

export default function ProjectPage() {

  const { projectId } = useParams()
  const [ project, setProject ] = useState()

  useEffect(() => {
    // setLoading(true)
    API.get(
      `/projects/${projectId}`
    )
    .then((res) => {
      setTimeout(function(){ setProject(res.data) }, 3000)
      // setLoading(false)
    })
    .catch((err) => {
      // setLoading(false)
      // props.redirect('/404')
    })
  }, [projectId])

  return (
    <Container style={{margin: '5% auto'}}>      
      { project ? 
      <Project project={project} />
      : <div style={{position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', top: 0, left: 0, bottom: 0, right: 0}}><div class="lds-ripple"><div></div><div></div></div></div> }
    </Container>
  )

}