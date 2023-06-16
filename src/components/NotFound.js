import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
    <div className="notfound">
        <h2>Sorry</h2>
        <p>That Page Cannot be Found</p>
        <Link to="/">Back to home page</Link>
    </div>
 );
}
 
export default NotFound;