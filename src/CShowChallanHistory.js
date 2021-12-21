import './App.css';
import { useState, useEffect } from 'react';
import Sidenav from './sidenav';
import { TextField, Input, TextareaAutosize } from '@mui/material';
import { MDBContainer, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import Web3 from "web3";
import { SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS } from './config'
import "./getTr.css"
import { auto } from 'async';

function CShowChallanHistory() {
  const [ListRule, setListRule] = useState([]);
  const [ListChallan, setListChallan] = useState([]);
  const [Msg, setMsg] = useState(""); //the account has been created and added to blockchain (store that password and address to login as officer)


  const getChallanHistory=async ()=>{
    let id = localStorage.getItem('id');
    const web3 = new Web3("http://localhost:7545")
    //perfectly working with the blockChain to call contract
    let Contract = require('web3-eth-contract');
    Contract.setProvider("http://localhost:7545");
    let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
    try {
      contract.methods.getAllChallan(id)
        .call({ from: id },
          function (error, result) {
            console.log(result)
            setListChallan(result)
          });

    } catch (e) {
      setMsg("Something went wrong")
    }
  }

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
    getVoilationRule();
    getChallanHistory();
  }, [])
  let Vehicle=["Motorcycle","Motorcar","Jeep","PublicServiceVehicle","PrivateCarrier","PublicCarrier"]


  return (
    <div>
      <Sidenav name0="Citizen Panel" name1="Show Traffic Rules" name2="Show Challan History" name3="Pay Current Challan" name4="" link0="/citizen" link1="/citizen/CShowTR" link2="/citizen/CChallanHistory" link3="/citizen/CPayChallan" link4="/citizen"/>

      <h1 className="h2 text-center mb-4" style={{color:"grey",marginLeft:"500px"}}>List of Traffic Rules</h1>

      <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>rule List</h1>

        <div className="mainContainer">
          {
            ListChallan.map((item, index) => (
              <div key={index}>


                <MDBCol style={{ maxWidth: "30rem" }} className="listContainer">
                  <MDBCard className="card" >
                    <MDBCardBody>
                      <MDBCardTitle style={{ color: 'indigo' }}>License ID: {item.LicenseID}</MDBCardTitle>

                      <span><h5>Citizen Name: {item.CitizenName}</h5></span>
                      <br />
                      <span><h5>Citizen CNIC: {item.CitizenCNIC}</h5></span>
                      <br />
                      <span><h5>Vehicle type:{Vehicle[item.CarType]}</h5></span>
                      <br />
                      <span><h5>Vehicle Plate:{item.CarNumberPlate}</h5></span>
                      <br />
                      <span><h5>Voilated Rules Code: {item.VoilationCode.toString()}</h5></span>
                      <br />
                      <span><h5>Fine: {item.Fine} Ethers</h5></span>
                      <br />
                      <span><h5>Time: {item.timeStamp}</h5></span>
                      <br />
                      <span><h5>Status: {item.status.toString()}</h5></span>
                      <br />

                    </MDBCardBody>



                  </MDBCard>
                </MDBCol>
                <br></br>


              </div>
            )
            )
          }


        </div>



      </div>
    </div>
  );
}

export default CShowChallanHistory;
