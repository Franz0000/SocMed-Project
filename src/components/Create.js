import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')
    const [author, setAuthor] = useState('Nick')
    const [image, setImage] = useState('')
    const [ispending, setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        const blog = {image,title,caption,author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
           method:"POST",
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify(blog)
        })
        .then((data)=>{
            setIsPending(false)
            console.log(data.body)
            console.log("data added")
            history.push('/') 
        })
    }
    const setHandleImage = (event) =>  {
        console.log(event.target.files)
        setImage(event.target.files[0].name)
    }
    return ( 
        <div className="create">
            <h2> Add vlog here</h2>
            <form onSubmit = {handleSubmit}>
                <label>add image to post</label>
                <input type="file" name="file" onChange={ setHandleImage } required/>
                <label>Title</label>
                <input value ={title} onChange={(event) => setTitle(event.target.value)}type="text" required/>
                <label>Caption</label>
                <textarea value={caption}  onChange ={(event) => setCaption(event.target.value)}required ></textarea>
                <label>posted by</label>
                <select value={author} onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Nick">Nick</option>
                    <option value="Yolyn">Yolyn</option>
                </select>
                {!ispending && <button>Add</button>}
                {ispending && <button disabled>Loading..</button>}
            </form>
        </div>
     );
}
 
export default Create;