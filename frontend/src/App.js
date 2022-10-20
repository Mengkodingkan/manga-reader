// import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Home from './component/home';
import Bookmarks from './component/bookmarks';
import Comics from './component/comics';
import './component/assets/css/styles.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/bookmarks' element={<Bookmarks />}></Route>
          <Route path='/comics' element={<Comics />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
