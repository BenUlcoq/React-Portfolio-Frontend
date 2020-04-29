import axios from 'axios'

let API

if ( process.env.NODE_ENV === 'production') {
  API = axios.create({
    baseURL: "https://benulcoq-portfolio-server.herokuapp.com/",
    withCredentials: true
}) }
else {
  API = axios.create({
    baseURL: "http://localhost:3001/",
    withCredentials: true
}) }


API.interceptors.request.use(function (config)  {

  if (localStorage.getItem('authToken')) {
    config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}`
  }

  return config

})


API.interceptors.response.use(function (response) {

  if (response.status === 401) {
    localStorage.removeItem('authToken')
    localStorage.removeItem('tokenExpiry')
  }

  if (response.data.authToken) {
    const token = response.data.authToken
    localStorage.setItem('authToken', token)
    localStorage.setItem('tokenExpiry', (Date.now() + 86400))
  }

  return response

})

export default API