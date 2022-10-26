import Header from './Header';
import Sidebar from './Sidebar';
import bookmarkImage from './assets/img/7.webp';

const Bookmarks = () => {
    return (
        <>
            <Header />

            <div className='contents-bookmarks'>
                <div className='main-contents-bookmarks'>
                    <div className='title'>
                        <h5>Bookmarks</h5>
                        <button type="submit" className='btn-delete'>Delete</button>
                    </div>
                    <div className="box">
                        <div className='desc'>
                            <p>You can save a list of manga titles here up to 200. The list approves based on the latest update date. The list of manga is stored in a browser that you can use right now.</p>
                        </div>
                        <div className='items'>
                            <div className='item'>
                                <div className='image-container'>
                                    <img src={bookmarkImage} alt="" />
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
                            <div className='item'>
                                <div className='image-container'>
                                    <img src={bookmarkImage} alt="" />
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
                            <div className='item'>
                                <div className='image-container'>
                                    <img src={bookmarkImage} alt="" />
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
                            <div className='item'>
                                <div className='image-container'>
                                    <img src={bookmarkImage} alt="" />
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
                            <div className='item'>
                                <div className='image-container'>
                                    <img src={bookmarkImage} alt="" />
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
                    </div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Bookmarks;