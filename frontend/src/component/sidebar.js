// import {Link} from 'react-router-dom';
import Weekly from './Weekly';
import Monthly from './Monthly';
import All from './All';

const anchoractive1 = () => {
    document.getElementsByClassName('sidebar-anchor')[0].classList.add('active');
    document.getElementsByClassName('sidebar-anchor')[1].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[2].classList.remove('active');
    document.getElementsByClassName('first-sidebar')[0].style.marginLeft = '0%';
    
}

const anchoractive2 = () => {
    document.getElementsByClassName('sidebar-anchor')[0].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[1].classList.add('active');
    document.getElementsByClassName('sidebar-anchor')[2].classList.remove('active');
    document.getElementsByClassName('first-sidebar')[0].style.marginLeft = '-100%';
}

const anchoractive3 = () => {
    document.getElementsByClassName('sidebar-anchor')[0].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[1].classList.remove('active');
    document.getElementsByClassName('sidebar-anchor')[2].classList.add('active');
    document.getElementsByClassName('first-sidebar')[0].style.marginLeft = '-200%';
}

const Sidebar = () => {
    // let {path, url} = useRouteMatch();
    return (
        <div className='sidebar'>      
            <div className='header-sidebar'>
                <div className="title">
                    <h5>Popular</h5>
                </div>
                <div className="navbar">
                    <div className="container">
                        <h5 className='sidebar-anchor active' onClick={anchoractive1}>Weekly</h5>
                        <h5 className='sidebar-anchor' onClick={anchoractive2}>Monthly</h5>
                        <h5 className='sidebar-anchor' onClick={anchoractive3}>All</h5>
                    </div>
                </div>
            </div>

            <div className='contents-sidebar'>
                <Weekly />
                <Monthly />
                <All />
            </div>
        </div>
    )
}

export default Sidebar;