import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../config/axios-config'
import Projects from '../../Projects'
import { Container } from '@material-ui/core'

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
      setProjects(res.data.projects)
      // setLoading(false)
    })
    .catch((err) => {
      // setLoading(false)
      // props.redirect('/404')
    })
  }, [tags])

  return (
    <div>
      <Container>
        <h1>Projects Page</h1>
        { projects ? 
          <Projects projects={projects} />
        : null }
        <button onClick={() => {
          console.log('clicked')
          tags.includes('yeet') ? setTags('404') : setTags('yeet')
          }}></button>
      </Container>
    </div>
  )

}