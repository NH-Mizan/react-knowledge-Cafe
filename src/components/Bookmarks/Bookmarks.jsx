import PropTypes from "prop-types";
import Bookmark from "../../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readMark }) => {
    return (
        <div className="w-1/3 bg-gray-100 m-4">
            <div className="bg-white ">
                <h2 className="text-2xl bg-red-100 mb-12 border-2 border-red-500 py-4 text-center rounded font-bold">
                    Reading Time : {readMark}

                </h2>
            </div>
            <div className="  ml-2">
                <h2 className="bg-green-200 py-4  rounded-xl font-bold text-xl text-center">Bookmarked Blogs: {bookmarks.length}</h2>

                {
                    bookmarks.map((bookmark, idx)=> <Bookmark
                        key={idx}
                        bookmark={bookmark}

                    ></Bookmark>)
                }
            </div>

        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readMark: PropTypes.number
}

export default Bookmarks;