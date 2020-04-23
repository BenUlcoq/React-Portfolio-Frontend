import React, { useEffect, useState } from 'react'
import API from '../config/axios-config'

export default function Project(props) {
  
  const project = props.project

  return (
    <div>
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
    </div>
  )

}