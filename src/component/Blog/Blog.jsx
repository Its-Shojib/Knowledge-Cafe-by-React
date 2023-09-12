const Blog = ({blog}) => {
    let {cover,title,author_img,author,posted_date,reading_time} = blog;
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
                    <span>{reading_time} min read</span>
                    <span></span>
                </div>
            </div>
            <h2 className=" text-3xl font-bold pb-5">{title}</h2>
            
            
        </div>
    );
};

export default Blog;
