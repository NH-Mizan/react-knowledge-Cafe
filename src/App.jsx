
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readMark, setReadmark] = useState(0)


  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) => {
    setReadmark(readMark + time);

    const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookmarks(remainingBookmarks)
  }

  return (

    <>


      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks
          readMark={readMark}
          bookmarks={bookmarks}
        ></Bookmarks>

      </div>
    </>
  )
}


export default App
