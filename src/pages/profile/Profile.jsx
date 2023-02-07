import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './profile.css'

export default function Profile() {
  return (
    <div>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="./assets/post/4.jpg" alt="" className="profileCoverImg" />
                        <img src="./assets/person/person1.jpg" alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Anjeline Fernando</h4>
                        <span className="profileInfoDesc">Hello Friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed></Feed>
                    <Rightbar profile/>
                </div>
            </div>
            
        </div>
    </div>
  )
}
