import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Bathroom Break</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/map' >Map</Link>
                <Link to='/feedback' >Feedback</Link>
                {/* onClick={ (event) => event.preventDefault() }  */}
            </div>
        </nav>
    );
}
 
export default Navbar;