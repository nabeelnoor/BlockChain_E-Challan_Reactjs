import './App.css';
import { useState, useEffect } from 'react';
import Sidenav from './sidenav';
import { TextField, Input, TextareaAutosize } from '@mui/material';
import { MDBContainer, MDBCardImage, MDBCardTitle, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import Web3 from "web3";
import { SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS } from './config'
import "./getTr.css"
import { auto } from 'async';

function PShowTR() {
  const [ListRule, setListRule] = useState([]);
  const [Msg, setMsg] = useState(""); //the account has been created and added to blockchain (store that password and address to login as officer)


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



  return (
    <div>
      <Sidenav name0="Officer Panel" name1="Show Traffic Rules" name2="Add Challan" name3="" name4="" link0="/police" link1="/police/showTR" link2="/police/addChallan" link3="/police" link4="/police" />

      <h1 className="h2 text-center mb-4" style={{color:"grey",marginLeft:"500px"}}>List of Traffic Rules</h1>

      <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>rule List</h1>

        <div className="mainContainer">
          {
            ListRule.map((item, index) => (
              item.status==true?
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


                    </MDBCardBody>



                  </MDBCard>
                </MDBCol>
                <br></br>


              </div>
              :<div style={{display:"none"}}></div>
            )
            )
          }


        </div>



      </div>
    </div>
  );
}

export default PShowTR;
