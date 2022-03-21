import React, { useState } from 'react'
import './Navbar.scss'
import { images } from '../../constants'
import { HiMenuAlt4, HiX, HiMoon } from 'react-icons/hi'
import { GiSun } from "react-icons/gi";
import { motion } from 'framer-motion';


const Navbar = (props) => {


  const [toggle, setToggle] = useState(false)

  

  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}> 
          <div/>
          <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        </ul>
        <div className='app__theme-btns' onClick={()=>props.handleClick()}>
          {!props.darkMode && <GiSun className='app__icon-light' />}

          {props.darkMode && <HiMoon className='app__icon-dark' />} 
        </div>
        
        <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=> setToggle(prevState => !prevState)}/>

        {toggle && (
          <motion.div
            whileInView={{x: [400, 0]}}
            transition={{duration: 1, ease: 'easeOut'}}
            className='app__navbar-panel'>
              <HiX onClick={()=> setToggle(false)}/>
              <ul>   
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item)=>(
          <li  key={item}> 
          
          <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        </ul>
          </motion.div>
          ) } 
          </div>
    </nav>
  )
}

export default Navbar