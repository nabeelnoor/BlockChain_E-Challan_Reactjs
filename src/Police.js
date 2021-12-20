import logo from './logo.svg';
import './App.css';
import BackgroundSlider from 'react-background-slider'
import background from "./images/c2.jpg"
import background1 from "./images/c5.jpg"
import background2 from "./images/c1.jpg"
// import Register from './register';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import CustomPopup from "./CustomPopup"
// import { TextField } from '@mui/material';

function Police() {

  const [visibility, setVisibility] = useState(false);
  const [Decider,setDecider]=useState(0);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div>
      {"Police"}
      <br></br>
      { localStorage.getItem('id')}
      <br></br>
      {localStorage.getItem('pswd')}
      <br></br>
      {/* <BackgroundSlider
        images={[background1, background2]}
        duration={8} transition={2} />

      <div>
        <h1 style={{ color: 'white', paddingLeft: '50px', paddingTop: '60px' }}>Challan Payment</h1>
        <p style={{ color: 'whitesmoke', paddingLeft: '50px', marginBottom: '100px', fontSize: 25 }}>
          An End-End Encrypted Fee Challan Payment Application</p>
        <Button variant="contained" style={{ marginLeft: '20px' }} onClick={(e) => {setVisibility(!visibility); setDecider(2)}}>Police Panel</Button>
        <Button variant="contained" style={{ marginLeft: '50px' }} onClick={(e) => {setVisibility(!visibility); setDecider(1)}}>Traffic Officer Panel</Button>
        <Button variant="contained" style={{ marginLeft: '70px' }} onClick={(e) => {setVisibility(!visibility); setDecider(0)}}>Citizen Panel</Button>
       
        <CustomPopup
          onClose={popupCloseHandler}
          show={visibility}
          title="Login Here"
          panel={Decider}
        >
          
        </CustomPopup>
      </div> */}
    </div>
  );
}

export default Police;
