const BlogList = (props) => {
    const blogs = props.blogs;
    const handleDelete = props.handleDelete;

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="drawing" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>
                        Link: <a href="\">{blog.url}</a>
                    </p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;