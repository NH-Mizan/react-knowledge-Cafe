import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="bg-green-200 py-4 m-2 rounded-xl font-bold text-xl text-center">Blogs: {blogs.length}</h1>
            
          {
            blogs.map(blog=> <Blog 
                key={blogs.id} 
                blog={blog}
                handleAddToBookmark ={handleAddToBookmark}
                handleMarkAsRead = {handleMarkAsRead}
                ></Blog>)
          }

        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;