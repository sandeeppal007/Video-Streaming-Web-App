import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from "../utilis/constsnt"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { recVideo } from "../utilis/videoSlice"
function VideoContainer() {

  const dispatch = useDispatch();

  const [videos, setVideos] = useState([]);



  useEffect(() => {
    getVideos();
  }, [])


  const getVideos = async () => {

 
    const data = await fetch(YOUTUBE_VIDEO_API)

    const json = await data?.json();

    setVideos(json?.items)
    dispatch(recVideo(json?.items))
  }
  console.log(videos)
  return videos?.length == 0 ? <h1>Loading</h1> : (
    <div className='flex flex-wrap justify-center '>



      {videos.map(video => <Link key={video.id} to={`/watch?v= ${video.id}`}><VideoCard VideoInfo={video} /></Link>)}





    </div>
  )
}

export default VideoContainer