import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useParams,useSearchParams,Link } from 'react-router-dom'
import { closeMenu } from '../utilis/appSlice';
import {YOUTUBE_VIDEO_LINK} from "../utilis/constsnt"
import CommentContainer from './CommentContainer';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';




const WatchPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const {items}= useSelector(store=>store.video)



  useEffect(()=>{
    dispatch(closeMenu())


  })




  return (

    <div className='flex flex-row '>
    <div className='px-5 flex flex-col'>

<iframe 
className='rounded-lg'
width="1000" 
height="500" 
src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
title="YouTube video player" 
frameBorder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowFullScreen
>

</iframe>
<CommentContainer/>

    </div>

    <div className='border ml-8'>

  
    {items.length !== 0 ? Object.values(items).map(video=> <Link key={video.id*12} to={"/watch?v="+video.id}><VideoCard  VideoInfo={video} /></Link>):<h1>eror</h1>}
    </div>
    </div>
  )
}

export default WatchPage