import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from './Head'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import WatchPage from './WatchPage'

function Body() {
  return (
    <div className='flex'>
    <Sidebar/>

    <div>

 
    <Head/>

    <Outlet/>
    </div>
    {/* <MainContainer/>
    <WatchPage/> */}
    </div>
  )
}

export default Body