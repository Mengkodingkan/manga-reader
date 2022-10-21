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
                <div className="box">
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={ComicsImage} alt="" />
                        </div>
                        <div className="desc-conatainer"></div>
                    </div>
                </div>
                <div className="box"></div>
            </div>
        </>
    )
}

export default Home;