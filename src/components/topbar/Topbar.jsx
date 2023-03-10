import React from 'react'
import './topbar.css';
import {Search, Person, Chat, Notifications} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className='logo'>Social Book</span>
        </div>
        <div className="topbarCenter">
          <div className='searchbar'>
            <Search className='searchIcon'/>
            <input placeholder='search here' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLink">
            <span>HomePage</span>
            <span>TimeLine</span>
          </div>
          <div className="topbarIcons">
              <div className="topbarIconItem">
                <Person></Person>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Chat></Chat>
                <span className="topbarIconBadge">1</span>
              </div>
              <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
              </div> 
          </div>

          <img src="/assets/person/person1.jpg" alt="" className="topbarImg" />
        </div>

    </div>
  )
}
