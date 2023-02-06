import React from 'react'
import './post.css'
import {MoreVert} from '@mui/icons-material'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="./assets/person/person1.jpg" alt="" className="postProfileImg" />
                    <span className="postUserName">Anjeline</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! its my first post</span>
                <img src="./assets/post/1.jpg" alt="" className="postImg" />
            </div>

            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./assets/icons/like.png" alt="" className="likeIcon" />
                    <img src="./assets/icons/heart.png" alt="" className="heartIcon" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
