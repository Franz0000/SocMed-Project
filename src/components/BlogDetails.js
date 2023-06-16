import { useParams } from "react-router-dom";
import useFetch from '../customHooks/useFetch'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
 const {id} = useParams()
 const  {data:blog, isPending , error} = useFetch("http://localhost:8000/blogs/" + id)
 const history = useHistory()
 const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id,{
        method:"DELETE"
    }).then( () =>{
        console.log("hello")
        history.push('/')
    })
 }
    return ( 
        <div className="blogDetails">
            {error &&<div>{error}</div> }
            {isPending && <div>Fetching Data...</div>}
           {blog && <div>
                <div className="nav">
                    <h2>{blog.title}</h2>
                    <button onClick={handleDelete} >X</button>
                </div>
                <article>
                    <p> {blog.caption}</p>
                    <cite> Writen by: {blog.author}</cite>
                </article>
                <img src={require(`../images/${blog.image}`)} alt="img"/>
           </div>} 
           
        </div>
     );
}
 
export default BlogDetails;