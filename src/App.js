import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import NewProject from './components/pages/admin/NewProject'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Dashboard from './components/pages/admin/Dashboard'
import Login from './components/pages/admin/Login'
import Redirector from './components/Redirector'
import HomePage from './components/pages/public/HomePage'
import ProjectsPage from './components/pages/public/ProjectsPage'
import ContactPage from './components/pages/public/ContactPage'
import ProjectPage from './components/pages/public/ProjectPage'


function App() {

  const [redirect, setRedirect] = useState(null)

  const redirectFunc = (val) => {
    setRedirect(val)
  }

  return (
    <>
        <BrowserRouter>
          <Redirector redirect={redirect} setRedirect={setRedirect} />
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} redirect={redirectFunc}
              render={ props => <HomePage {...props} redirect={redirectFunc}/>}
            />
            <Route exact path='/projects' component={ProjectsPage} redirect={redirectFunc}
              render={ props => <ProjectsPage {...props} redirect={redirectFunc}/>}
            />
            <Route exact path='/contact' component={ContactPage} redirect={redirectFunc}
              render={ props => <ContactPage {...props} redirect={redirectFunc}/>}
            />
            <Route exact path='/projects/:projectId' component={ProjectPage} redirect={redirectFunc}
              render={ props => <ProjectPage {...props} redirect={redirectFunc}/>}
            />
            
          {/* 
            <PrivateRoute exact path ='/admin'><Dashboard/></PrivateRoute>
            <PrivateRoute exact path ='/admin/login'><Login/></PrivateRoute>
            <PrivateRoute exact path ='/admin/projects/new'><NewProject/></PrivateRoute> */}
            <PrivateRoute exact path="/admin" component={Dashboard} redirect={redirectFunc} 
                render={ props => <Dashboard {...props} redirect={redirectFunc}/>}
            /> 
            <PrivateRoute reverse exact path="/admin/login" component={Login} redirect={redirectFunc} 
                render={ props => <Login {...props} redirect={redirectFunc}/>}
            /> 
            <PrivateRoute exact path="/admin/projects/new" component={NewProject} redirect={redirectFunc} 
                render={ props => <NewProject {...props} redirect={redirectFunc}/>}
            /> 
            
            
          </Switch>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App;
