import React from 'react'
import {Grid, Paper} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default function Projects(props) {

  const projects = props.projects

  return (
    <Grid container spacing={4}>
    { projects ? 
      projects.map((project) => {
        return (
        <Grid item xs={12} sm={6} md={4}>
          <Link to={`/projects/${project._id}`}>
            <Paper>
              <img src={project.featured.url} width={100}/>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
        
              {project.media.map((item) => {
                return <img src={item.url} width={50}/>
              })}
              <ul>
                {project.tags.map((tag) => {
                  return <li>{tag}</li>
                })}
              </ul>
          </Paper>
        </Link>
      </Grid>)}
      )
      : null
    }
    </Grid>
  )

}