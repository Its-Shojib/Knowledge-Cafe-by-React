import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  let [bookmark,setBookmark] = useState([]);


  let handleBookmark = (blog) =>{
    let newBookmark = [...bookmark,blog]
    setBookmark(newBookmark);
  }
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12'>
      <Header></Header>
      <div className='flex justify-around'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  )
}

export default App
