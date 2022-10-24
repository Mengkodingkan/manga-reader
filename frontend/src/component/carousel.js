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

let count = 1;
const slideshow = setInterval(() => {
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
}, 7000)

const carousel = () => {
    return (
        <div className='carousel-container' slideshow={slideshow}>
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
    )
}

export default carousel;