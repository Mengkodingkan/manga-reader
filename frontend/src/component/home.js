import Header from './header';

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
        </>
    )
}

export default Home;