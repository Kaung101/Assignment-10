// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Nav from './components/Nav.jsx'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
function App() {

  return (
    <div className="App">
     <Nav/>
     <Content/>
     <Sidebar/>
    </div>
  )
}

export default App
