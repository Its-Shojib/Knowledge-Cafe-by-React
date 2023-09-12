import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
function App() {
  return (
    <div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12'>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
