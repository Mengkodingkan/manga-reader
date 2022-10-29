import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Detail = () => {
    return (
        <>
            <Header />

            <div className='detail-comic'>
                <div className='main-contents'>
                    <div className='box'>
                        <Link to="/" className='f-1'>Manga Reader </Link> <span>&#62;</span> <Link to="/detail" className='f-1'>I'll Be Taking A Break For Personal Reasons</Link>
                    </div>
                    <div className='box'></div>
                    <div className='box'></div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Detail;