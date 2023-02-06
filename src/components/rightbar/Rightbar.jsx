import React from 'react'
import './rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
            <div className="birthdayContainer">
                <img src="./assets/icons/birthday.png" alt="" className="bithdayImg" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b> 3 other friends </b> have birthdy today
                </span>
            </div>
            <img src="./assets/icons/ad.jpg" alt="" className="rightbarAd" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                      <img src="./assets/person/person2.jpg" alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUserName">John Carter</span>
              </li>
              <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                      <img src="./assets/person/person2.jpg" alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUserName">John Carter</span>
              </li>
              <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                      <img src="./assets/person/person2.jpg" alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUserName">John Carter</span>
              </li>
              <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                      <img src="./assets/person/person2.jpg" alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUserName">John Carter</span>
              </li>
              <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                      <img src="./assets/person/person2.jpg" alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUserName">John Carter</span>
              </li>
              <li className="rightbarFriend">
                  <div className="rightbarProfileImgContainer">
                      <img src="./assets/person/person2.jpg" alt="" className="rightbarProfileImg" />
                      <span className="rightbarOnline"></span>
                  </div>
                  <span className="rightbarUserName">John Carter</span>
              </li>
            </ul>
        </div>
    </div>
  )
}
