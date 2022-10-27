// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Bookmarks from './component/Bookmarks';
import Comics from './component/comics';
import Footer from './component/Footer';
import './component/assets/css/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/bookmarks' element={<Bookmarks />}></Route>
          <Route path='/comics' element={<Comics />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>

  );
}

export default App;
