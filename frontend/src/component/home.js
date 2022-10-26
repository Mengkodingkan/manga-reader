import Header from './header';
import Sidebar from './sidebar';
import Carousel from './carousel';
import ComicsImage from './assets/img/carousel-1.jpg';
import ComicsImage2 from './assets/img/7.webp';
import { Link } from 'react-router-dom'; 

const Home = () => {
    return (
        <>
            <Header />
            
            <Carousel />

            <div className='contents'>
                <div className='main-contents'>
                    <div className='popular'>
                        <div className='box'>
                            <div className='image-container'>
                                <img src={ComicsImage2} alt="" />
                                <div className='hover'></div>
                            </div>
                            <div className='desc-container'>
                                <h4>I'll Be Taking A Break For Personal Reasons</h4>
                                <h5>Chapter 20</h5>
                                <div className='rating'>
                                    <div className='stars'>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className='evaluation'>
                                        <h5>10</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='image-container'>
                                <img src={ComicsImage2} alt="" />
                                <div className='hover'></div>
                            </div>
                            <div className='desc-container'>
                                <h4>I'll Be Taking A Break For Personal Reasons</h4>
                                <h5>Chapter 20</h5>
                                <div className='rating'>
                                    <div className='stars'>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className='evaluation'>
                                        <h5>10</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='image-container'>
                                <img src={ComicsImage2} alt="" />
                                <div className='hover'></div>
                            </div>
                            <div className='desc-container'>
                                <h4>I'll Be Taking A Break For Personal Reasons</h4>
                                <h5>Chapter 20</h5>
                                <div className='rating'>
                                    <div className='stars'>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className='evaluation'>
                                        <h5>10</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='image-container'>
                                <img src={ComicsImage2} alt="" />
                                <div className='hover'></div>
                            </div>
                            <div className='desc-container'>
                                <h4>I'll Be Taking A Break For Personal Reasons</h4>
                                <h5>Chapter 20</h5>
                                <div className='rating'>
                                    <div className='stars'>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className='evaluation'>
                                        <h5>10</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='image-container'>
                                <img src={ComicsImage2} alt="" />
                                <div className='hover'></div>
                            </div>
                            <div className='desc-container'>
                                <h4>I'll Be Taking A Break For Personal Reasons</h4>
                                <h5>Chapter 20</h5>
                                <div className='rating'>
                                    <div className='stars'>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                        <i className="fa-sharp fa-solid fa-star"></i>
                                    </div>
                                    <div className='evaluation'>
                                        <h5>10</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='update-lates'>
                        <div className="desc">
                            <div className="item">
                                <h5>Lates Update</h5>
                            </div>
                            <div className="item">
                                <Link to="/" className='btn-detail'>VIEW ALL</Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className='item'>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='list'>
                                    <div className="image-container">
                                        <img src={ComicsImage} alt="" />
                                    </div>
                                    <div className="desc-container">
                                        <div className='title'>
                                            <Link to="/" className='a-2'>Never Die Extra</Link>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                        <div className="a-1">
                                            <Link to="/" className='a-3'>Chapter 66</Link>
                                            <h5>10 hours ago</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Home;