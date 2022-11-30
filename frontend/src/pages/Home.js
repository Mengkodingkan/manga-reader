import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Carousel from "../component/Carousel";
// import ComicsImage from "../component/assets/img/carousel-1.jpg";
import ComicsImage2 from "../component/assets/img/7.webp";
// import Monthly from './Monthly';
// import Weekly from './Weekly';
// import All from './All';
// import Home from './Home';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

async function getKomik() {
  const response = await fetch("http://localhost:3568/api/v1/asura/home");
  const json = await response.json();

  return json.data;
}

function ImageOnError(e) {
  e.target.onerror = null;

  const base64img = btoa(e.target.src);
  return (e.target.src = "https://bypass.kato-rest.us/?q=" + base64img);
}

const Home = () => {
  const [komik, setKomik] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKomik().then((data) => {
      setKomik(data);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <>
      {/* <h1>TEST LOADING</h1> */}
    </>
  ) : (
    <>
      <Header />

      <Carousel />

      <div className="contents">
        <div className="main-contents">
          <div className="popular">
            <div className="title">
              <h5>Popular Today</h5>
            </div>
            <div className="box">
              {komik.popular_today.map((item) => (
                <div className="item">
                  <div className="image-container">
                    <img src={item.thumb} alt="title" />
                    <div className="hover"></div>
                  </div>
                  <div className="desc-container">
                    <Link to={item.endpoint} className="btn-detail">
                      {item.title}
                    </Link>
                    <h5>{item.chapter}</h5>
                    <div className="rating">
                      <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                      </div>
                      <div className="evaluation">
                        <h5>{item.scores}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="update-lates">
            <div className="desc">
              <div className="item">
                <h5>Lates Update</h5>
              </div>
              <div className="item">
                <Link to="/" className="btn-detail">
                  VIEW ALL
                </Link>
              </div>
            </div>
            <div className="box">
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img src={ComicsImage2} alt="title" />
                </div>
                <div className="desc">
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              {/* jadiin 1 box per komik*/}
              {/* <div className="item">
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
                <div className="list">
                  <div className="image-container">
                    <img src={ComicsImage} alt="" />
                  </div>
                  <div className="desc-container">
                    <div className="title">
                      <Link to="/" className="a-2">
                        Never Die Extra
                      </Link>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                    <div className="a-1">
                      <Link to="/" className="a-3">
                        Chapter 66
                      </Link>
                      <h5>10 hours ago</h5>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </>
  );

  //     <>
  //       <Header />

  //       <Carousel />

  //       <div className="contents">
  //         <div className="main-contents">
  //           <div className="popular">
  //             <div className="title">
  //               <h5>Popular Today</h5>
  //             </div>
  //             <div className="box">
  //               <div className="item">
  //                 <div className="image-container">
  //                   <img src={ComicsImage2} alt="" />
  //                   <div className="hover"></div>
  //                 </div>
  //                 <div className="desc-container">
  //                   <Link to="manga/{endpoint}" className="btn-detail">
  //                     I 'll Be Taking A Break...
  //                   </Link>
  //                   <h5>Chapter 20</h5>
  //                   <div className="rating">
  //                     <div className="stars">
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                     </div>
  //                     <div className="evaluation">
  //                       <h5>10</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="image-container">
  //                   <img src={ComicsImage2} alt="" />
  //                   <div className="hover"></div>
  //                 </div>
  //                 <div className="desc-container">
  //                   <Link to="/detail" className="btn-detail">
  //                     I 'll Be Taking A Break...
  //                   </Link>
  //                   <h5>Chapter 20</h5>
  //                   <div className="rating">
  //                     <div className="stars">
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                     </div>
  //                     <div className="evaluation">
  //                       <h5>10</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="image-container">
  //                   <img src={ComicsImage2} alt="" />
  //                   <div className="hover"></div>
  //                 </div>
  //                 <div className="desc-container">
  //                   <Link to="/detail" className="btn-detail">
  //                     I 'll Be Taking A Break...
  //                   </Link>
  //                   <h5>Chapter 20</h5>
  //                   <div className="rating">
  //                     <div className="stars">
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                     </div>
  //                     <div className="evaluation">
  //                       <h5>10</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="image-container">
  //                   <img src={ComicsImage2} alt="" />
  //                   <div className="hover"></div>
  //                 </div>
  //                 <div className="desc-container">
  //                   <Link to="/detail" className="btn-detail">
  //                     I 'll Be Taking A Break...
  //                   </Link>
  //                   <h5>Chapter 20</h5>
  //                   <div className="rating">
  //                     <div className="stars">
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                     </div>
  //                     <div className="evaluation">
  //                       <h5>10</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="image-container">
  //                   <img src={ComicsImage2} alt="" />
  //                   <div className="hover"></div>
  //                 </div>
  //                 <div className="desc-container">
  //                   <Link to="/detail" className="btn-detail">
  //                     I 'll Be Taking A Break...
  //                   </Link>
  //                   <h5>Chapter 20</h5>
  //                   <div className="rating">
  //                     <div className="stars">
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                       <i className="fa-sharp fa-solid fa-star"></i>
  //                     </div>
  //                     <div className="evaluation">
  //                       <h5>10</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="update-lates">
  //             <div className="desc">
  //               <div className="item">
  //                 <h5>Lates Update</h5>
  //               </div>
  //               <div className="item">
  //                 <Link to="/" className="btn-detail">
  //                   VIEW ALL
  //                 </Link>
  //               </div>
  //             </div>
  //             <div className="box">
  //               <div className="item">
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="item">
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="list">
  //                   <div className="image-container">
  //                     <img src={ComicsImage} alt="" />
  //                   </div>
  //                   <div className="desc-container">
  //                     <div className="title">
  //                       <Link to="/" className="a-2">
  //                         Never Die Extra
  //                       </Link>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                     <div className="a-1">
  //                       <Link to="/" className="a-3">
  //                         Chapter 66
  //                       </Link>
  //                       <h5>10 hours ago</h5>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <Sidebar />
  //       </div>
  //     </>
  //   );
};

export default Home;
