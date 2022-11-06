import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import ComicsImage2 from "../component/assets/img/7.webp";
import { Link } from "react-router-dom";

const Comics = () => {
  return (
    <>
      <Header />
      {/* <div className='content-comics'>
                <div className='main-content'>
                    <div className='comics-container'>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={comicsImage} alt="" />
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={comicsImage} alt="" />    
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={comicsImage} alt="" />    
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={comicsImage} alt="" />    
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-container'>
                                <img src={comicsImage} alt="" />    
                            </div>
                            <div className='desc-container'>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> */}

      <div className="contents-comics">
        <div className="main-contents">
          <div className="manga-list">
            <div className="title">
              <h5>Manga Lists</h5>
            </div>
            <div className="box">
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
                      <h5>10</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="image-container">
                  <img src={ComicsImage2} alt="" />
                  <div className="hover"></div>
                </div>
                <div className="desc-container">
                  <Link to="/detail" className="btn-detail">
                    I 'll Be Taking A Break...
                  </Link>
                  <h5>Chapter 20</h5>
                  <div className="rating">
                    <div className="stars">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <div className="evaluation">
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
  );
};

export default Comics;
