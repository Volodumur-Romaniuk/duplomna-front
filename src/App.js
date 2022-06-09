import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import MainPage from './Components/MainPage/MainPage';
import AboutPage from './Components/AboutPage/AboutPage';
import BlogPage from './Components/BlogPage/BlogPage';
import ContactPage from './Components/ContactPage/ContactPage';
import MenuPage from './Components/MenuPage/MenuPage';
import PromoPage from './Components/PromoPage/PromoPage';
import BasketPage from './Components/BasketPage/BasketPage';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import PopupPaswword from './Components/MainPage/PopupPassword';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          
          <Route path = '/' exact element = {<React.Fragment><Header/><MainPage/><Footer/></React.Fragment>} /> 
          <Route path = '/about' exact element = {<React.Fragment><Header/><AboutPage/><Footer/></React.Fragment>} /> 
          <Route path = '/blog' exact element = {<React.Fragment><Header/><BlogPage/><Footer/></React.Fragment>} /> 
          <Route path = '/contact' exact element = {<React.Fragment><Header/><ContactPage/><Footer/></React.Fragment>} /> 
          <Route path = '/menu' exact element = {<React.Fragment><Header/><MenuPage/><Footer/></React.Fragment>} /> 
          <Route path = '/promo' exact element = {<React.Fragment><Header/><PromoPage/><Footer/></React.Fragment>} /> 
          <Route path = '/basket' exact element = {<React.Fragment><Header/><BasketPage/><Footer/></React.Fragment>} /> 
          <Route path = '/singleproduct' exact element = {<React.Fragment><Header/><SingleProduct/><Footer/></React.Fragment>} />
          <Route path = '/popuppassword' exact element = {<React.Fragment><PopupPaswword/></React.Fragment>} />  
          
          </Routes>  
      </BrowserRouter>

    </div>
  );
}

export default App;
