import React from 'react';

import './ContactPage.css';
import VisitContact from './Components/VisitContact';
import FormContant from './Components/FormContact';
function  ContactPage() {
  return (
    <div className="contactpage">
        <VisitContact/>
        <FormContant/>
    </div>
  );
}

export default ContactPage;