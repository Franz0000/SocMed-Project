import {Link} from 'react-router-dom'
import '../styles/bloglist.css';
const Bloglist = ({blogs}) => {
    blogs = [...blogs].sort((a, b) => b.id - a.id);
    return ( 
        <div className="home">
            <h2>News Feed</h2>
        { blogs.map((blog) =>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <div className="title-nav">
                        <h2>{blog.title}</h2>
                        {/* <button onClick={()=>{
                            fetch(
                                "http://localhost:8000/blogs/" + blog.id,{
                                    method:"DELETE"
                                }
                            ).then(() => {
                                window.location.reload(true);
                            })
                        }}>X</button> */}
                    </div>
                    <img src={require(`../images/${blog.image}`)} alt="img"/>
                    <div className="caption">
                        <article>
                            <p>{blog.caption}</p>
                        </article>
                    </div>
                    <cite>Posted by {blog.author}</cite>
                </Link>
            </div>
        )) }
        </div>
     );
}
 
export default Bloglist;