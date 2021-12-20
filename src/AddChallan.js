import logo from './logo.svg';
import './App.css';
import BackgroundSlider from 'react-background-slider'
import background1 from "./images/c3.jpg"
import background2 from "./images/c5.jpg"
// import Register from './register';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CustomPopup from "./CustomPopup"
import Sidenav from './sidenav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TextField, Input, TextareaAutosize } from '@mui/material';
import Web3 from "web3";
import { SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS } from './config'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";

// import { TextField } from '@mui/material';

function AddChallan() {
  // contract.methods.addChallan("license/address","Name","123-CNIC",1-(vehicel),"123-CarPlate",[0,1],"timestamp")
  const [License, setLicense] = useState("");
  const [Name, setName] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [CarType, setCarType] = useState(0); //{Motorcycle,Motorcar,Jeep,PublicServiceVehicle,PrivateCarrier,PublicCarrier}
  const [Plate, setPlate] = useState("");    //the account has been created and added to blockchain (store that password and address to login as officer)
  const [VCode, setVCode] = useState([])
  const [Msg, setMsg] = useState("");
  const [ListRule, setListRule] = useState([]);


  const getVoilationRule = async () => {
    let id = localStorage.getItem('id');

    const web3 = new Web3("http://localhost:7545")
    //perfectly working with the blockChain to call contract
    let Contract = require('web3-eth-contract');
    Contract.setProvider("http://localhost:7545");
    let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
    //call to not payable function
    try {
      contract.methods.getTrafficRules()
        .call({ from: id },
          function (error, result) {
            console.log(result)
            setListRule(result)
          });

    } catch (e) {
      setMsg("Something went wrong")
    }
  }


  useEffect(() => {
    getVoilationRule()
  }, [])




  const addChallan = async () => {

  }






  return (
    <div>
      <Sidenav name0="Officer Panel" name1="Show Traffic Rules" name2="Add Challan" name3="" name4="" link0="/police" link1="/police/showTR" link2="/police/addChallan" link3="/police" link4="/police" />

      


    </div>
  );
}

export default AddChallan;
