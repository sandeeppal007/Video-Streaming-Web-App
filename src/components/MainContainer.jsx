import React from 'react'
import ButtonList from './ButtonList'
import Head from './Head'
import VideoContainer from './VideoContainer'

function MainContainer() {
  return (
    <div className='col-span-11'>

    <ButtonList/>
    <VideoContainer/>
    </div>
  )
}

export default MainContainer