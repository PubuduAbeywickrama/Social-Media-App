import React from 'react'
import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material';

export default function () {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="./assets/person/person1.jpg" alt="" className="shareProfileImg" />
                <input type="" className="shareInput" placeholder='What is in your mind ?' />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className="shareIcon"></PermMedia>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className="shareIcon"></Label>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className="shareIcon"></Room>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='gold' className="shareIcon"></EmojiEmotions>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
