import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookmark}) => {
    let {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className=" space-y-5">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-5">
                    <img  className="w-12" src={author_img} alt="" />
                    <div>
                        <h2 className=" text-2xl font-semibold">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='pr-3 text-lg'>{reading_time} min read</span>
                    <button onClick={()=> handleBookmark(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className=" text-3xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a> </span>)
                }
            </p>
            <p className='pb-3'>
                <button>Mark as Read</button>
            </p>
            
            
        </div>
    );
};

export default Blog;
