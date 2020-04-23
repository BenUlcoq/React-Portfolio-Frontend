import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import API from '../../../config/axios-config'
import Project from '../../Project'

export default function ProjectPage() {

  const { projectId } = useParams()
  const [ project, setProject ] = useState()

  useEffect(() => {
    // setLoading(true)
    API.get(
      `/projects/${projectId}`
    )
    .then((res) => {
      setProject(res.data)
      // setLoading(false)
    })
    .catch((err) => {
      // setLoading(false)
      // props.redirect('/404')
    })
  }, [])

  return (
    <div>
      <h1>Project Page</h1>
      { project ? 
      <Project project={project} />
      : null }
    </div>
  )

}