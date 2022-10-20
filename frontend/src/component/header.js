import Logo from './assets/img/mengkodingkan-logo.png';
import {Link} from 'react-router-dom';

const HamburgHandler = () => {
    document.getElementsByClassName('nav-mobile-container')[0].classList.toggle('active');
}
const Header = () => {
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className="navbar-top">
                        <div className="navbar-container">
                            <div className="box">
                                <div className="image-container">
                                <img src={Logo} alt="" /> 
                                </div>
                            </div>
                            <div className="box">
                                <div className="search-container">
                                    <input type="text" placeholder="Search"/>
                                    <button type="submit" className="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                                <div className='hamburger-container' onClick={HamburgHandler}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-bottom">
                        <div className="navbar-container">
                            <Link className='nav-anchor' to="/home">Home</Link>
                            <Link className='nav-anchor' to="/bookmarks">Bookmarks</Link>
                            <Link className='nav-anchor' to="/comics">Comics</Link>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className='nav-mobile-container'>
                <Link className='nav-anchor' to="/home">Home</Link>
                <Link className='nav-anchor' to="/bookmarks">Bookmarks</Link>
                <Link className='nav-anchor' to="/comics">Comics</Link>
            </div>
        </>
    )
}

export default Header;