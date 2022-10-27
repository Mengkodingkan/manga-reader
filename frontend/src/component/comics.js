import Header from './Header';
// import Sidebar from './Sidebar';
import Img from './assets/img/7.webp';

const Comics = () => {
    return (
        <>
            <Header />
            <div className='content-comics'>
                <div className='main-content'>
                    <div className='comics-container'>
                        <div className='item'>
                            <div className='img-container'>
                            <img src={Img} />
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={Img} />
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={Img} />
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={Img} />
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={Img} />
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Comics;