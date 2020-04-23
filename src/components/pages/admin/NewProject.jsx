import React, { useState, useReducer } from 'react'
import API from '../../../config/axios-config'
import FileInput from '../../FileInput'

function NewProject() {

  const [files, setFiles] = useState([])
  const [data, setData] = useReducer((state, newState) => (
    {...state, ...newState}
  ), {
    tags: [
      'yeet',
      'oof'
    ]
  })
  let formData = new FormData()
  // formData.append()

  const onChange = e => {
    setData({[e.target.name]: e.target.value})
  } 

  const onFormSubmit = (e) => {
    console.log(files)
    e.preventDefault()

    for (let file of files) {
      formData.append('images', file)
    }
      
    Object.entries(data).map((field) => {
      formData.append(field[0], field[1])
      return field
    })

    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    API.post("/projects/create", formData, { headers: {
      'Content-Type': 'multipart/form-data'
    }})
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <label>File Upload</label>
        <FileInput files={files} setFiles={setFiles}/>

        <label>Project Title</label>
        <input placeholder="Project Title..." type="text" name="title" value={data.title} onChange={onChange}/>
  
        <label>Description</label>
        <input placeholder="Project Description..." type="text" name="description" value={data.description} onChange={onChange}/>
       
        {/* <label>Tags</label> */}
        {/* Select Options */}


        <button type="submit">Submit</button>
      </form>
    </div>
  );

}

export default NewProject;