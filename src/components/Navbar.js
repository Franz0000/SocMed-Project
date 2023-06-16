import {Link} from 'react-router-dom'
import '../styles/navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar">

            <h2>YoNick</h2>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >Add New Story</Link>
                <img src='../icons/icons8-person-48.png' alt='profile'/>
            </div>
        </div>
     );
}
 
export default Navbar;