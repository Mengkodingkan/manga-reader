import Header from './header';
import ComicsImage from './assets/img/carousel-1.jpg';
import ComicsImage2 from './assets/img/1.webp';
import ComicsImage3 from './assets/img/2.png';
import ComicsImage4 from './assets/img/6.webp';
import ComicsImage5 from './assets/img/4.webp';
import ComicsImage6 from './assets/img/4.jpg';
import { Link } from 'react-router-dom'; 

const slide1 = () => {
    document.getElementsByClassName('first')[0].style.marginLeft = '0%';
    document.getElementsByClassName('c-1')[0].style.backgroundColor = '#ffd700';
    document.getElementsByClassName('c-2')[0].style.backgroundColor = '#fff';
    document.getElementsByClassName('c-3')[0].style.backgroundColor = '#fff';
}

const slide2 = () => {
    document.getElementsByClassName('first')[0].style.marginLeft = '-100%';
    document.getElementsByClassName('c-1')[0].style.backgroundColor = '#fff';
    document.getElementsByClassName('c-2')[0].style.backgroundColor = '#ffd700';
    document.getElementsByClassName('c-3')[0].style.backgroundColor = '#fff';
}

const slide3 = () => {
    document.getElementsByClassName('first')[0].style.marginLeft = '-200%';
    document.getElementsByClassName('c-1')[0].style.backgroundColor = '#fff';
    document.getElementsByClassName('c-2')[0].style.backgroundColor = '#fff';
    document.getElementsByClassName('c-3')[0].style.backgroundColor = '#ffd700';
}

const carouselactive = () => {
    let count = 1;
    setInterval(() => {
        count++;
        if(count > 3) {
            count = 1;
        };

        switch (count) {
            case 1:
                slide1();
                break;
            case 2:
                slide2();
                break;
            default:
                slide3();
                break;
        }

    }, 7000);

}

const Home = () => {
    return (
        <>
            <Header />
            
            <div className='carousel-container' carousel={carouselactive()}>
                <ul className='carousel-image'>
                    <li className='image first'>
                        <div className="hover2">
                            <div className='box'>
                                <div className='desc-container'>
                                    <div className='d-1'>
                                        <div className='stars'>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <h5>10</h5>
                                        </div>
                                        <div className='title'>
                                            <div className='e-1'>
                                                <Link to="/" className="anchor">
                                                    THE WORLD AFTER THE END
                                                </Link>
                                            </div>
                                            <div className='e-2'>
                                                <h4>MANHWA</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-2'>
                                        <Link to="/" className='anchor'>Action</Link>
                                        <Link to="/" className='anchor'>Adventure</Link>
                                        <Link to="/" className='anchor'>Fanta</Link>
                                    </div>
                                    <div className='d-3'>
                                        <h4>SUMMARY</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, sunt velit recusandae sit cum nobis, iusto adipisci ipsam consequuntur quidem. Iure eos pariatur perferendis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='image-container'>
                                    <img src={ComicsImage4} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='image'>
                        <div className="hover2">
                            <div className='box'>
                                <div className='desc-container'>
                                    <div className='d-1'>
                                        <div className='stars'>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <h5>10</h5>
                                        </div>
                                        <div className='title'>
                                            <div className='e-1'>
                                                <Link to="/" className="anchor">
                                                    THE WORLD AFTER THE END
                                                </Link>
                                            </div>
                                            <div className='e-2'>
                                                <h4>MANHWA</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-2'>
                                        <Link to="/" className='anchor'>Action</Link>
                                        <Link to="/" className='anchor'>Adventure</Link>
                                        <Link to="/" className='anchor'>Fanta</Link>
                                    </div>
                                    <div className='d-3'>
                                        <h4>SUMMARY</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, sunt velit recusandae sit cum nobis, iusto adipisci ipsam consequuntur quidem. Iure eos pariatur perferendis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='image-container'>
                                    <img src={ComicsImage5} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='image'>
                        <div className="hover2">
                            <div className='box'>
                                <div className='desc-container'>
                                    <div className='d-1'>
                                        <div className='stars'>
                                            <i className="fa-sharp fa-solid fa-star"></i>
                                            <h5>10</h5>
                                        </div>
                                        <div className='title'>
                                            <div className='e-1'>
                                                <Link to="/" className="anchor">
                                                    THE WORLD AFTER THE END
                                                </Link>
                                            </div>
                                            <div className='e-2'>
                                                <h4>MANHWA</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-2'>
                                        <Link to="/" className='anchor'>Action</Link>
                                        <Link to="/" className='anchor'>Adventure</Link>
                                        <Link to="/" className='anchor'>Fanta</Link>
                                    </div>
                                    <div className='d-3'>
                                        <h4>SUMMARY</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui, sunt velit recusandae sit cum nobis, iusto adipisci ipsam consequuntur quidem. Iure eos pariatur perferendis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='image-container'>
                                    <img src={ComicsImage6} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='btn-slide-container'>
                    <div className='btn-slide c-1'></div>
                    <div className='btn-slide c-2'></div>
                    <div className='btn-slide c-3'></div>
                </div>
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
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>2</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>3</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>4</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>5</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>6</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>7</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>8</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>9</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                            <div className="item">
                                <div className='number'>
                                    <h5>10</h5>
                                </div>
                                <div className='image-container'>
                                    <img src={ComicsImage3} alt="" />
                                </div>
                                <div className='desc-container'>
                                    <div className='title'>
                                        <Link to="/" className='b-1'>Existence</Link>
                                    </div>
                                    <div className='genres'>
                                        <h5>Genres: <Link to="/" className='b-2'>Action, </Link> <Link to="/" className='b-3'>Adventure, </Link> <Link to="/" className='b-4'>Comedy, </Link> <Link to="/" className='b-5'>Fantasy</Link></h5> 
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;