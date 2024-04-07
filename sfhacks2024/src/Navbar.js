import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>SF Civil Pro</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/study' >Study</Link>
                <Link to='/exams' >Exams</Link>
                <Link to='/profile' >Profile</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;