import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Project from './pages/project'
import Document from './pages/document'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<App/>}>
          <Route path = '' element = {<Home/>}/>
          <Route path = 'projects' element = {<Projects/>}/>
          <Route path = 'project' element = {<Project/>}/>
          <Route path = 'project/document' element = {<Document/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
); 