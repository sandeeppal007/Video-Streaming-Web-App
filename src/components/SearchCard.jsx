import { title } from 'process'
import React,{useEffect} from 'react'

const SearchCard = ({searchVideo}) => {
const {snippet} = searchVideo



useEffect(()=>{


// getVideoDataById()
},[])


const getVideoDataById=async()=>{
const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=AIzaSyCJ7elnMAHt_f_gcU_FzA7EjdNRPjOmFJQ")
const json = await data.json();


// console.log(json)


}




  return (
    <div className='flex items-center border shadow-lg gap-5 m-10 rounded-lg  '>

        <img className='w-52' src={snippet?.thumbnails?.high?.url} alt="" />

        <div>
        <h2>{searchVideo?.snippet?.title}</h2>

        <div className=''>
        <h3>views</h3>
        <h3>Time</h3>

        </div>

        <div>
            <img src="" alt="" />
            <h2>{}</h2>
        </div>

        <div>
            <p>{}</p>
        </div>




        </div>

    </div>
  )
}

export default SearchCard