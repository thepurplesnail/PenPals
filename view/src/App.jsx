import React, {useState} from 'react'
import './css/App.css'
import Sidebar from './sidebar'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { StyledMenu } from './components/styling'

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="App">
      <Sidebar showSidebar = {showSidebar} onClick = {() => setShowSidebar(false)}/>
      <StyledMenu onClick = {() => setShowSidebar(true)}/>
      <Outlet/>
    </div>
  );
}

export default App;