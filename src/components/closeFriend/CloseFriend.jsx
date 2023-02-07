import React from 'react'
import './closeFriend.css'


export default function ({user}) {
  return (
            <li className="sidebarFriend">
                  <img src={user.profilePicture} alt="" className="sidebarfriendImg" />
                  <span className="sidebarFriendName">{user.username}</span>
            </li>
              
  )
}
