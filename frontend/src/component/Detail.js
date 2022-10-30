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
                        <Link to="/" className='f-1'>Manga Reader </Link> <span>&#62;</span> <Link to="/detail" className='f-1'>I'll Be Taking ...</Link>
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
                                <div className='container'>
                                    <div className='status'>
                                        <h5>Status</h5> <h5>Ongoing</h5>
                                    </div>
                                    <div className='type'>
                                        <h5>Type</h5> <Link to="/" className='g-1'>Manhwa</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='title'>
                                <h4>I'll Be Taking A Break For Personal Reasons</h4>
                            </div>
                            <div className='synopsis'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur a alias temporibus aperiam rem tempore, adipisci exercitationem odit est hic accusantium et maiores atque ad eum officiis neque esse tenetur vel optio accusamus, veritatis id. Molestiae repellendus omnis id, cupiditate incidunt optio voluptatibus saepe temporibus quibusdam fuga vitae laboriosam non ut officiis, aliquam et similique eius officia nihil! Consectetur laudantium, dignissimos velit eligendi fugit dolorem, est praesentium nobis aliquid corporis earum nesciunt repellendus reiciendis.</p>
                            </div>
                            <div className='h-1'>
                                <div className='i-1'>
                                    <div className='j-1'>
                                        <h5>Released</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5 className='lighter'>mangareader</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5>Artist</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5 className='lighter'>RK Studio</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5>Serialization</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5 className='lighter'>-</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5>Posted On</h5>
                                    </div>
                                    <div className='j-1'>
                                        <h5 className='lighter'>October 19, 2022</h5>
                                    </div>
                                </div>
                                <div className='i-2'>
                                    <div className='j-2'>
                                        <h5>Author</h5>
                                    </div>
                                    <div className='j-2'>
                                        <h5>-</h5>
                                    </div>
                                    <div className='j-2 none'></div>
                                    <div className='j-2 none'></div>
                                    <div className='j-2'>
                                        <h5>Posted By</h5>
                                    </div>
                                    <div className='j-2'>
                                        <h5 className='lighter'>Kita</h5>
                                    </div>
                                    <div className='j-2'>
                                        <h5>Updated On</h5>
                                    </div>
                                    <div className='j-2'>
                                        <h5 className='lighter'>October 27, 2022</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='genres'>
                                <div className='title'>
                                    <h5>Genres</h5>
                                </div>
                                <div className='container'>
                                    <Link to="/" className='go-to-genre'>Action</Link>
                                    <Link to="/" className='go-to-genre'>Adventure</Link>
                                    <Link to="/" className='go-to-genre'>Fantasy</Link>
                                    <Link to="/" className='go-to-genre'>Virtual Game</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box'></div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Detail;