import React, {useState} from 'react'
import {Grid} from '@material-ui/core'
import ProjectCard from './ProjectCard'



export default function Projects(props) {

  const projects = props.projects
  const [hovered, setHovered] = useState(null)


  return (
    
    <Grid container spacing={2} style={{justifyContent: 'space-around'}}>
      
    { projects ? 
      projects.map((project) => {
        return (
          <ProjectCard hovered={hovered} setHovered={setHovered} project={project} />
        )}
      )
      : null
    }
    </Grid>
  )

}