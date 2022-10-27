import ComicsImage from './assets/img/4.webp';
import { Link } from 'react-router-dom';

const Weekly = () => {
    return (
        <div className="box first-sidebar">
            <div className="item">
                <div className="a-1">
                    <h5>1</h5>
                </div>
                <div className="a-2">
                    <img src={ComicsImage} alt="" />
                </div>
                <div className="a-3">
                    <div className='b-1'>
                        <Link to="/" className='c-1'>Existence</Link>
                    </div>
                    <div className='b-2'>
                        <h5>Genres: </h5>
                    </div>
                    <div className='b-3'></div>
                </div>
            </div>
            <div className="item">
                <div className="a-1">
                    <h5>2</h5>
                </div>
                <div className="a-2">
                    <img src={ComicsImage} alt="" />
                </div>
                <div className="a-3">
                    <div className='b-1'>
                        <Link to="/" className='c-1'>Existence</Link>
                    </div>
                    <div className='b-2'>
                        <h5>Genres: </h5>
                    </div>
                    <div className='b-3'></div>
                </div>
            </div>
            <div className="item">
                <div className="a-1">
                    <h5>3</h5>
                </div>
                <div className="a-2">
                    <img src={ComicsImage} alt="" />
                </div>
                <div className="a-3">
                    <div className='b-1'>
                        <Link to="/" className='c-1'>Existence</Link>
                    </div>
                    <div className='b-2'>
                        <h5>Genres: </h5>
                    </div>
                    <div className='b-3'></div>
                </div>
            </div>
            <div className="item">
                <div className="a-1">
                    <h5>4</h5>
                </div>
                <div className="a-2">
                    <img src={ComicsImage} alt="" />
                </div>
                <div className="a-3">
                    <div className='b-1'>
                        <Link to="/" className='c-1'>Existence</Link>
                    </div>
                    <div className='b-2'>
                        <h5>Genres: </h5>
                    </div>
                    <div className='b-3'></div>
                </div>
            </div>
            <div className="item">
                <div className="a-1">
                    <h5>5</h5>
                </div>
                <div className="a-2">
                    <img src={ComicsImage} alt="" />
                </div>
                <div className="a-3">
                    <div className='b-1'>
                        <Link to="/" className='c-1'>Existence</Link>
                    </div>
                    <div className='b-2'>
                        <h5>Genres: </h5>
                    </div>
                    <div className='b-3'></div>
                </div>
            </div>
            <div className="item">
                <div className="a-1">
                    <h5>6</h5>
                </div>
                <div className="a-2">
                    <img src={ComicsImage} alt="" />
                </div>
                <div className="a-3">
                    <div className='b-1'>
                        <Link to="/" className='c-1'>Existence</Link>
                    </div>
                    <div className='b-2'>
                        <h5>Genres: </h5>
                    </div>
                    <div className='b-3'></div>
                </div>
            </div>
        </div>
    )
}

export default Weekly;