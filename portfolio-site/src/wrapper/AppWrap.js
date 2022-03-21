import React from 'react'
import {NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component, idName, classNames) => function HOC(props) {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Component darkMode = {props.darkMode}/>

            <div className='copyright'>
                <p className='p-text'> @2022 Tophiyan</p>
                <p className='p-text'> No rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap