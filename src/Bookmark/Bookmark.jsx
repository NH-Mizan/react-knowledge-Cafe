import PropTypes from "prop-types";


const Bookmark = ({ bookmark}) => {
    const {title} = bookmark;
    return (
        
        <div className="bg-lime-200 p-4 border-2 rounded-xl m-6 mt-10 "> 
            <h3 className="text-2xl">{title}</h3>

        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    
}

export default Bookmark;
