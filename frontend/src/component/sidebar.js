import {Link} from 'react-router-dom';

const anchoractive1 = () => {
    document.getElementsByClassName('sidebar-anchor')[0].classList.add('active');
    document.getElementsByClassName('sidebar-anchor')[1].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[2].classList.remove('active');
    
}

const anchoractive2 = () => {
    document.getElementsByClassName('sidebar-anchor')[0].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[1].classList.add('active');
    document.getElementsByClassName('sidebar-anchor')[2].classList.remove('active');
}

const anchoractive3 = () => {
    document.getElementsByClassName('sidebar-anchor')[0].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[1].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[2].classList.add('active');
}

const Sidebar = () => {
    return (
        
        <div className='header-sidebar'>
            <div className="title">
                <h5>Popular</h5>
            </div>
            <div className="navbar">
                <div className="container">
                    <Link to="/" className='sidebar-anchor active' onClick={anchoractive1}>Weekly</Link>
                    <Link to="/" className='sidebar-anchor' onClick={anchoractive2}>Monthly</Link>
                    <Link to="/" className='sidebar-anchor' onClick={anchoractive3}>All</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;