import React, { Component } from 'react'
import Crew from './pages/Crew'
import Home from './pages/Home'
import Adventures from './pages/Adventures'
import About from './pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

export const ROUTES = {
  homePage: { path: "/", name: "Kezdőlap", component: <Home /> },
  crewPage: { path: "/crew", name: "Személyzet", component: <Crew /> },
  adventurePage: { path: "/adventures", name: "Kalandok", component: <Adventures /> },
  aboutPage: { path: "/about", name: "Rólunk", component: <About /> }
}



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path={ROUTES.homePage.path} element={ROUTES.homePage.component} />
        <Route path={ROUTES.crewPage.path} element={ROUTES.crewPage.component} />
        <Route path={ROUTES.adventurePage.path} element={ROUTES.adventurePage.component} />
        <Route path={ROUTES.aboutPage.path} element={ROUTES.aboutPage.component} />
      </Routes>
    </BrowserRouter>
  )
}

export default App