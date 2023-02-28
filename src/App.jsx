import { Provider } from "react-redux"
import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Head from "./components/Head"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import { YOUTUBE_CATEGORY } from "../src/utilis/constsnt"
import SearchVideoCard from "./components/SearchVideoCard"

import store from "./utilis/store"

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [

    {
      path: "/",
      element: <MainContainer />
    },
 
    {
      path: "/watch",
      element: <WatchPage />
    },
    {
      path: "/search",
      element: <SearchVideoCard />
    }

  ]
}])

function App() {

 
  return (
    <>
      <Provider store={store}>


 
        <RouterProvider router={appRouter} />
      
      </Provider>
    </>

  )
}

export default App
