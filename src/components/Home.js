import Bloglist from "./Bloglist";
import useFetch from '../customHooks/useFetch'
const Home = () => {
    //fires a function every render
    const {data:blogs, isPending , error} = useFetch('http://localhost:8000/blogs')
    // const handleDelete = (id) =>{
    //     console.log('http://localhost:8000/blogs/'+ id)
    //     fetch('http://localhost:8000/blogs/'+ id,{
    //         method:"DELETE"
    //     }).then(()=>{
    //         console.log(blogs)
    //     })
    // }
    return ( 
        <div className="home">
            {error &&<div>{error}</div> }
            {isPending && <div>Fetching Data...</div>}
           {blogs && <Bloglist blogs={blogs}/>} 
        </div>

     );
}
 
export default Home;