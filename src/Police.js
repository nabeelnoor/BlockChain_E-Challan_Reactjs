import logo from './logo.svg';
import './App.css';
import BackgroundSlider from 'react-background-slider'
import background1 from "./images/c3.jpg"
import background2 from "./images/c5.jpg"
// import Register from './register';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CustomPopup from "./CustomPopup"
import Sidenav from './sidenav';

function Police() {
  return (
    <div>
      <Sidenav name0="Officer Panel" name1="Show Traffic Rules" name2="Add Challan" name3="" name4="" link0="/police" link1="/police/showTR" link2="/police/addChallan" link3="/police" link4="/police"/>
      
      <BackgroundSlider
        images={[background1, background2]}
        duration={8} transition={2} />

      <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>Challan Payment</h1>
        <p style={{ color: 'whitesmoke', paddingLeft: '350px', marginBottom: '100px', fontSize: 25 }}>
          An End-End Encrypted Fee Challan Payment Application</p>
       
      
      
      </div>
    </div>
  );
}

export default Police;
