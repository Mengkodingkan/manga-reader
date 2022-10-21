import Header from './header';
import ComicsImage from './assets/img/carousel-1.jpg';
import ComicsImage2 from './assets/img/1.webp'
import ComicsImage3 from './assets/img/2.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            
            <div className='carousel-container'>
                <ul className='carousel-image'>
                    <li className='image first'></li>
                    <li className='image'></li>
                    <li className='image'></li>
                </ul>
            </div>

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
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
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
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
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
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
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
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
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
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
                                        <i class="fa-sharp fa-solid fa-star"></i>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                                <div className='items'>
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
                <div className='sidebar'>
                    <div className='desc'>
                        <h5>Popular</h5>
                    </div>
                    <div className='box'>
                        <div className='a-4'>
                            <ul className='a-6'>
                                <li className='a-7 active'>
                                    <Link to="/" className='a-8'>Weekly</Link>
                                </li>
                                <li className='a-7'>
                                    <Link to="/" className='a-8'>Monthly</Link>
                                </li>
                                <li className='a-7'>
                                    <Link to="/" className='a-8'>All</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='a-5'>
                            <div className="item">
                                <div className='number'>
                                    <h5>1</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>2</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>3</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>4</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>5</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>6</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>7</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>8</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>9</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>10</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;