import Header from './header';
import Sidebar from './sidebar';

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
                            <div className='item'></div>
                            <div className='item'></div>
                            <div className='item'></div>
                            <div className='item'></div>
                            <div className='item'></div>
                        </div>
                    </div>
                </div>

                <Sidebar />
            </div>
        </>
    )
}

export default Bookmarks;