import React from 'react';
import CarouselMain from './MainPageEl/CarouselMain';
import AboutMain from './MainPageEl/AboutMain';
import MainMenu from './MainPageEl/MainMenu';
import MainVisit from './MainPageEl/MainVisit';
import MenuReview from './MainPageEl/MenuReview';
import PromoMain from './MainPageEl/PromoMain';
import BookMain from './BookMain';
import BlogMain from './MainPageEl/BlogMain';

import './MainPage.css';

function MainPage() {
  return (
    <div className="mainpage">
       
    <CarouselMain/>
    <AboutMain/>
    <MainMenu/>
    <MainVisit/>
    <MenuReview/>
    <PromoMain/>
    <BookMain/>
    <BlogMain/>
   
    </div>
  );
}

export default MainPage;
