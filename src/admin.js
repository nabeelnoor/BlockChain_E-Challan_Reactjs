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
// import { TextField } from '@mui/material';

function Admin() {

  const [visibility, setVisibility] = useState(false);
  const [Decider,setDecider]=useState(0);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div>
      <Sidenav name0="Admin Panel" name1="Add Traffic Rule" name2="Show Traffic Rule" name3="Add Traffic Officer" name4="Show Traffic Officer" link0="/admin" link1="/admin/addTR" link2="/admin/showTR" link3="/admin/addTP" link4="/admin/showTP" />
      {/* {"Admin"}
      <br></br>
      { localStorage.getItem('id')}
      <br></br>
      {localStorage.getItem('pswd')}
      <br></br> */}
      <BackgroundSlider
        images={[background1, background2]}
        duration={8} transition={2} />

      <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>Challan Payment</h1>
        <p style={{ color: 'whitesmoke', paddingLeft: '350px', marginBottom: '100px', fontSize: 25 }}>
          An End-End Encrypted Fee Challan Payment Application</p>
        {/* <Button variant="contained" style={{ marginLeft: '20px' }} onClick={(e) => {setVisibility(!visibility); setDecider(2)}}>Admin Panel</Button>
        <Button variant="contained" style={{ marginLeft: '50px' }} onClick={(e) => {setVisibility(!visibility); setDecider(1)}}>Traffic Officer Panel</Button>
        <Button variant="contained" style={{ marginLeft: '70px' }} onClick={(e) => {setVisibility(!visibility); setDecider(0)}}>Citizen Panel</Button> */}
       
      
      
      </div>
    </div>
  );
}

export default Admin;
