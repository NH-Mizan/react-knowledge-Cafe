import PropTypes from 'prop-types';

import { IoBookmarks } from "react-icons/io5";


const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const{title, authorImageAvatar, courseThumbnail, readingTime, authorName,postDate, hasTag, id} = blog;
    return (
        <div className='my-10 '>
            <img src={courseThumbnail} alt="Cover Picture Of the title " />
            <div className='flex justify-between items-center '>
                <div className='flex justify-between items-center '>
                    <img src={authorImageAvatar} alt="" className='w-20 mt-4'/>

                    <div className='ml-6'>
                        <h1 className='text-2xl font-bold'>{authorName}</h1>
                        <p> {postDate}</p>
                        
                    </div>
                </div>


                <div className='flex items-center'>
                    <span>{readingTime} min read</span>

                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-4 text-2xl'><IoBookmarks  /></button>



                </div>

            </div>
            <h2 className="text-5xl font-bold my-6 text-left ">{title}</h2>
            <h3 className='text-left'>{hasTag}</h3>
            <button onClick={()=>handleMarkAsRead(id, readingTime)} className='text-red-500 font-bold underline'>Mark as Read</button>
      
            
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;