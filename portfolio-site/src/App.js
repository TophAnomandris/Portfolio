import React from 'react'
import { About, Footer, Header, Skills, Testimonial, Work } from './container'
import { Navbar } from './components'
import './App.scss'

export default function App(){


  

  const[isDarkmode, setIsDarkmode] = React.useState(false)

  function handleClick(){
    setIsDarkmode(!isDarkmode)
  }
  const theme = isDarkmode? "dark" : "light"





  return (
    <div className='app' data-theme={theme}>
      <Navbar 
      handleClick = {handleClick}
      darkMode = {isDarkmode} />
      <Header
      darkMode = {isDarkmode}/>
      <About
      darkMode = {isDarkmode}/>
      <Work
      darkMode = {isDarkmode}/>
      <Skills
      darkMode = {isDarkmode}/>
      <Testimonial
      darkMode = {isDarkmode}/>
      <Footer
      darkMode = {isDarkmode}/>
    </div>
  )
}

 

