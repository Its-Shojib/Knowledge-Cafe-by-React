import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark}) => {
    return (
        <div className=" pl-5 w-1/3">
            <p>Bookmarked: {bookmark.length}</p>
            {
                bookmark.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;