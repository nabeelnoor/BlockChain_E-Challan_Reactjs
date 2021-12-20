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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TextField, Input, TextareaAutosize } from '@mui/material';
import Web3 from "web3";
import { SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS } from './config'
// import { TextField } from '@mui/material';

function AddTR() {

  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [Msg, setMsg] = useState(""); //the account has been created and added to blockchain (store that password and address to login as officer)

  const addTrafficPolice = async () => {
    let policeOfficer = Address; //traffic police addres  newly generated
    let admin= localStorage.getItem('id');
    const web3 = new Web3("http://localhost:7545")
    //perfectly working with the blockChain to call contract
    let Contract = require('web3-eth-contract');
    Contract.setProvider("http://localhost:7545");
    let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
    try{
      web3.eth.personal.unlockAccount(admin, 'password', 50000).then(
        () => {
          contract.methods.addTrafficPolice(policeOfficer)
            .send({ from: admin })
            .on('receipt', function (receipt) {
              console.log(receipt)
              web3.eth.personal.lockAccount(admin) //now again lock the account
            });
        }
      )
    }catch(e){
      setMsg("Something went wrong")
    }
    
  }

  const createAccount = () => {
    //this will create account from scratch

    const web3 = new Web3("http://localhost:7545")

    let finalResult = web3.eth.personal.newAccount(Password)
      .then((result) => {
        console.log(result)
        setAddress(result,()=>{
          addTrafficPolice()
        })
      })
    console.log(finalResult)

  }

  return (
    <div>
      <Sidenav name0="Admin Panel" name1="Add Traffic Rule" name2="Show Traffic Rule" name3="Add Traffic Officer" name4="Show Traffic Officer" link0="/admin" link1="/admin/addTR" link2="/admin/showTR" link3="/admin/addTP" link4="/admin/showTP" />

      <BackgroundSlider
        images={[background1, background2]}
        duration={8} transition={2} />

      <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>Create and Add Traffic Officer</h1>


        <Card sx={{ maxWidth: 845, marginLeft: '390px' }}>
          <CardContent>
            <Typography gutterBottom variant="h7" component="div" style={{ paddingTop: "20px", paddingLeft: "250px" }}>
              Kept Password secret
            </Typography>
            <TextField id="outlined-basic" label="Enter Password to generate ID" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px', width: "520px" }}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <Button variant="contained" style={{ marginTop: '6px', marginLeft: '50px', paddingBottom: '15px' }} onClick={createAccount}>create and add Account</Button>
            <br></br>
            {Address == "" ? <div style={{ display: "None" }}></div> :
              <div>
                <Typography gutterBottom variant="h7" component="div" style={{ paddingTop: "20px", paddingLeft: "20px" }}>
                Newly Generated Address has been stored as police officer identity in blockchain
              </Typography>
                <TextField value={Address} id="outlined-basic" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px', width: "520px" }}
                />
              </div>}
              {Msg == "" ? <div style={{ display: "None" }}></div> :
              <div>
                <Typography gutterBottom variant="h7" component="div" style={{ paddingTop: "20px", paddingLeft: "20px" }}>
                {Msg}
              </Typography>
              </div>}
            
          </CardContent>


        </Card>



      </div>
    </div>
  );
}

export default AddTR;
