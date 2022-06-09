import React from 'react';

import './AboutPage.css';
import AboutEl from './Components/AboutEl';
import IconAbout from './Components/IconAbout';
import AboutImage from './Components/AboutImage';
import AboutBook from './Components/AboutBook';
function AboutPage() {
  return (
    <div className="aboutpage">

    <AboutEl/>
    <IconAbout/>
    <AboutImage/>
    <AboutBook/>
    </div>
  );
}

export default AboutPage;
