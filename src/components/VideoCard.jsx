import React from 'react'
import {YOUTUBE_VIDEO_LINK} from "../utilis/constsnt"

function VideoCard({VideoInfo}) {


   const {snippet,statistics} = VideoInfo;
   const {channelTitle,title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg rounded-lg  '>
      
       
         <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbail" />
         <ul>
          <li className='font-bold py-2 text-sm'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount}</li>
         </ul>

 

    </div>
  )
}

export default VideoCard