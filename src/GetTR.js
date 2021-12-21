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
import { MDBContainer, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import Web3 from "web3";
import { SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS } from './config'
import "./getTr.css"
import { auto } from 'async';
// import { TextField } from '@mui/material';

function GetTR() {
  const [ListRule, setListRule] = useState([]);
  const [Msg, setMsg] = useState(""); //the account has been created and added to blockchain (store that password and address to login as officer)

  const [Desc, setDesc] = useState("");
  const [F1, setF1] = useState(0);
  const [F2, setF2] = useState(0);
  const [F3, setF3] = useState(0);


  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");

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


  const _DeactivateRule = async (val) => {
    const web3 = new Web3("http://localhost:7545")
    //perfectly working with the blockChain to call contract
    let Contract = require('web3-eth-contract');
    Contract.setProvider("http://localhost:7545");
    let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract

    let targetIndex = val.index;
    console.log(targetIndex)
    let id = localStorage.getItem('id');

    web3.eth.personal.unlockAccount(id, localStorage.getItem('pswd'), 50000).then(
      () => {
        contract.methods.deactivateRule(targetIndex)
          .send({ from: id })
          .on('receipt', function (receipt) {
            console.log(receipt)
            getVoilationRule()
            // web3.eth.personal.lockAccount(temp) //now again lock the account
          });
      }
    )
  }

  const _ActivateRule = async (val) => {
    const web3 = new Web3("http://localhost:7545")
    //perfectly working with the blockChain to call contract
    let Contract = require('web3-eth-contract');
    Contract.setProvider("http://localhost:7545");
    let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract

    let targetIndex = val.index;
    console.log(targetIndex)
    let id = localStorage.getItem('id');

    web3.eth.personal.unlockAccount(id, localStorage.getItem('pswd'), 50000).then(
      () => {
        contract.methods.activateRule(targetIndex)
          .send({ from: id })
          .on('receipt', function (receipt) {
            console.log(receipt)
            getVoilationRule()
            // web3.eth.personal.lockAccount(temp) //now again lock the account

          });
      }
    )
  }







  return (
    <div>
      <Sidenav name0="Admin Panel" name1="Add Traffic Rule" name2="Show Traffic Rule" name3="Add Traffic Officer" name4="Show Traffic Officer" link0="/admin" link1="/admin/addTR" link2="/admin/showTR" link3="/admin/addTP" link4="/admin/showTP" />

      {/* <BackgroundSlider
        images={[background1, background2]}
        duration={8} transition={2} style={{height:auto}}/> */}

      <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>rule List</h1>

        <div className="mainContainer">
          {
            ListRule.map((item, index) => (
              <div key={index}>


                <MDBCol style={{ maxWidth: "30rem" }} className="listContainer">
                  <MDBCard className="card" >
                    <MDBCardBody>
                      <MDBCardTitle style={{ color: 'indigo' }}>Code ID: {index}</MDBCardTitle>

                      <span><h5>Description: {item.Description}</h5></span>
                      <br />
                      <span><h5>ACategoryVehicle_Fine: {item.ACategoryVehicle_Fine}</h5></span>
                      <br />
                      <span><h5>BCategoryVehicle_Fine:{item.BCategoryVehicle_Fine}</h5></span>
                      <br />
                      <span><h5>CCategoryVehicle_Fine:{item.CCategoryVehicle_Fine}</h5></span>
                      <br />
                      <span><h5>Status: {item.status.toString()}</h5></span>
                      <br />
                      {
                        item.status != true ?
                          <button className="buttonColor" onClick={() => _ActivateRule({ index })}>ActivateRule</button> :

                          <button className="buttonColor" onClick={() => _DeactivateRule({ index })}>DeactivateRule</button>
                      }

                      <br></br>


                    </MDBCardBody>



                  </MDBCard>
                </MDBCol>
                <br></br>


              </div>
            ))
          }


        </div>



      </div>
    </div>
  );
}

export default GetTR;
