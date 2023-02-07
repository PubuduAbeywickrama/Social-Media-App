import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'


export default function Rightbar({profile}) {
    const HomeRightbar = () => {
        return(<>
            <div className="birthdayContainer">
                <img src="./assets/icons/birthday.png" alt="" className="bithdayImg" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b> 3 other friends </b> have birthdy today
                </span>
            </div>
            <img src="./assets/icons/ad.jpg" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {
                    Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))
                }
              
            </ul>
        </>);
    };

    const ProfileRightbar = () => {
        return(
            <>
                <h4 className="rightBarTitle">User Information</h4>
                <div className="rightBarfInfo">
                    <span className="rightBarInfoKey">City : </span>
                    <span className="rightBarInfoValue">New York</span>
                </div>
                <div className="rightBarfInfo">
                    <span className="rightBarInfoKey">From : </span>
                    <span className="rightBarInfoValue">Madrid</span>
                </div>
                <div className="rightBarfInfo">
                    <span className="rightBarInfoKey">Relationship : </span>
                    <span className="rightBarInfoValue">Single</span>
                </div>
                <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="./assets/person/person1.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">John carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="./assets/person/person2.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">John carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="./assets/person/person3.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">John carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="./assets/person/person4.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">John carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="./assets/person/person5.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">John carter</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="./assets/person/person6.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">John carter</span>
                    </div>
                    
                </div>
            </>
        )
    }

  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
           {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}
