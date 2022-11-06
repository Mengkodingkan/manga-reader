// import logo from './logo.svg';
import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import Bookmarks from "./pages/Bookmarks";
import Comics from "./pages/comics";
import Detail from "./component/Detail";
import Footer from "./component/Footer";
import "./component/assets/css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
          <Route path="/comics" element={<Comics />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
