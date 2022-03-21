import React from 'react'
import {BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div
    className='app__social'>
      <a href="https://twitter.com/TophGuyy"><div><BsTwitter/></div></a>
      <a href="https://linkedin.com/in/oluwatofiyan-rotimi-945479145"><div><BsLinkedin/></div></a>
      <a href="https://github.com/TophAnomandris"><div><BsGithub/></div></a>
        
    </div>
  )
}

export default SocialMedia