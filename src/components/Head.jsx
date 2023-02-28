import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utilis/appSlice';
import { Link } from "react-router-dom"
import { YOUTUBE_SEARCH_API } from "../utilis/constsnt"
import { json } from 'body-parser';
import { cacheResults } from "../utilis/searchSlice"

function Head() {
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search)

  const toggleMenuHandler = () => {

    dispatch(toggleMenu())


  }
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)




  useEffect(() => {

    // make api call after every keypress
    // but if the diff b/w 2 api call is < 200 ms
    // decline the api call

    const timer = setTimeout(() => {


      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestion()
      }
    }, 200)

    return () => {
      clearTimeout(timer)
    }

  }, [searchQuery]);


  /*
  ** key-i
  -render the compnet
  useEffect()
  -satart timer make api call after 200 ms
  key - ip
  -render the component
  - useEffect()
  -start timer=>api call after 200ms
  
  
  
  *
  
  
  
  
  
  
  */

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json();
    console.log(json[1])

    console.log(searchQuery)

    setSuggestions(json[1])

    dispatch(cacheResults({
      [searchQuery]: json[1],
    })
    )
  }
  return (

    <div className='grid grid-flow-col p-4 shadow-lg'>


      <div className='flex'>


        <img
          onClick={() => toggleMenuHandler()}


          className=' cursor-pointer h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAVFBMVEX///8aGhoAAABOTk4ODg5ycnJfX1+AgIBZWVkICAj6+vqzs7P39/fDw8O9vb1BQUHOzs56enri4uJpaWmtra3W1tbo6OicnJzc3NyNjY2np6fu7u5gh8gkAAAApElEQVRoge3ZywqDMBCF4VR7sWMSo6b10vd/z+q27WIYELT83yZkIIcwiyEQ5wAAAI5LNjwUm9KgiarwujgbFLUy/GSgDjfJqvDU3gzapAoHsGehrAzKoAo/8si9GyjDU38x6HU9B7BnoboaVP8/cje8+aY9BwAAAP6T/yzIV8VKfHbiUpdExMvjuSzd8vxeN17W/4Mw+HocxsnPcY6vHLNMv3Le0GQSSEE0+3UAAAAASUVORK5CYII=" alt="" />




        <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="" />


      </div>

      <div className='flex justify-center items-center'>

        <div className='flex flex-col relative'>

          <input
            type="text"
            className='border border-gray-400 p-2 w-96 h-10  rounded-l-full'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}


          />

          {showSuggestions && (
            <ul className='absolute top-10 left-2 border-red-500 bg-white w-96 border-shadow-lg'>

              {
                suggestion.map(s => <Link key={s} to={`/search?q=${s}`}> <li className=' py-2   w-96 px-5 h-10  rounded '>{s}</li></Link>)
              }


            </ul>



          )}
        </div>


        <button className='border bg-slate-100  rounded-r-full w-16 h-10 flex justify-center items-center' >
          <img className='' src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-8.png" alt="" /></button>
      </div>



      <div>

        <img className='h-8 w-8 rounded-full border border-red-600 bg-slate-300' src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="" />

      </div>

    </div>
  )
}

export default Head