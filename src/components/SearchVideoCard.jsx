import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API_VIDEO } from "../utilis/constsnt"
import SearchCard from './SearchCard';
import VideoCard from './VideoCard';

const SearchVideoCard = () => {

  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState([])
  const [videos, setVideos] = useState([])




  useEffect(() => {


    getSearchVideoApi()


  }, [])






  const getSearchVideoApi = async () => {

    const data = await fetch(`${YOUTUBE_SEARCH_API_VIDEO}+${searchParams.get("q")}+&key=AIzaSyBPdiWTztA5LFy_VAdkl4RDbbvZL0KUz6Y`);

    const json = await data?.json();

    setVideos(json?.items)



   



  }






  
  // console.log(videos)
  return (
    <div>




      {videos?.length !== 0 ? videos?.map(video => <Link key={video.id * 4} to={`/watch?v=${video.id.videoId || video.id.playlistId
        }`}><SearchCard searchVideo={video} /> </Link>) : <h1>Loading</h1>}



    </div>
  )
}

export default SearchVideoCard