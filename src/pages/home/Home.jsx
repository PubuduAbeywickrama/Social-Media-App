import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './home.css'

export default function Home() {
  return (
    <div>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed></Feed>
            <Rightbar/>
        </div>
    </div>

  )
}
