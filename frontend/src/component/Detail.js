import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import ComicsImage2 from './assets/img/7.webp';

const Detail = () => {
    return (
        <>
            <Header />

            <div className='detail-comic'>
                <div className='main-contents'>
                    <div className='box'>
                        <Link to="/" className='f-1'>Manga Reader </Link> <span>&#62;</span> <Link to="/detail" className='f-1'>I'll Be Taking A Break For Personal Reasons</Link>
                    </div>
                    <div className='box'>
                        <div className='item'>
                            <div className='image-container'>
                                <img src={ComicsImage2} alt="" />
                            </div>
                            <div className='desc-container'>
                                <button type="submit" className="btn-bookmark">
                                    <i className="fa-regular fa-bookmark"></i> <h5>Bookmark</h5>
                                </button>
                                <div className='rating'>
                                    <div className='stars'>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className='value'>
                                        <h5>10</h5>
                                    </div>
                                </div>
                                <div className='status'>
                                    <h5>Status</h5> <h5>Ongoing</h5>
                                </div>
                                <div className='type'>
                                    <h5>Type</h5> <Link to="/" className='g-1'>Manhwa</Link>
                                </div>
                            </div>
                        </div>
                        <div className='item'></div>
                    </div>
                    <div className='box'></div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Detail;