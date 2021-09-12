import './Navbar.css';
import {Link}  from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
           
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>

            </div>
            
            <ul className="navbar__links">
                <li>
                    <Link to = "/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cartlogo__badge">Cart 0</span>
                    </Link>
                </li>
                <li>
                    <Link to = "/">
                        Shop
                    </Link>
                </li>
            </ul>
            
            <div className="hamburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
