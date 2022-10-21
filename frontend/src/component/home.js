import Header from './header';
import ComicsImage from './assets/img/carousel-1.jpg';

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
                                <img src={ComicsImage} alt="" />
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
                                <img src={ComicsImage} alt="" />
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
                                <img src={ComicsImage} alt="" />
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
                                <img src={ComicsImage} alt="" />
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
                                <img src={ComicsImage} alt="" />
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
                    <div className='update-lates'></div>
                </div>
                <div className='sidebar'></div>
            </div>
        </>
    )
}

export default Home;