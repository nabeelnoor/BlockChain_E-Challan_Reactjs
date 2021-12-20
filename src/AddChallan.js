import logo from './logo.svg';
import './App.css';
import BackgroundSlider from 'react-background-slider'
import background1 from "./images/c3.jpg"
import background2 from "./images/c5.jpg"
// import Register from './register';
import Button from '@mui/material/Button';
import { useState ,useEffect} from 'react';
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

function AddChallan() {
  // contract.methods.addChallan("license/address","Name","123-CNIC",1-(vehicel),"123-CarPlate",[0,1],"timestamp")
  const [License, setLicense] = useState("");
  const [Name, setName] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [CarType, setCarType] = useState(0); //{Motorcycle,Motorcar,Jeep,PublicServiceVehicle,PrivateCarrier,PublicCarrier}
  const [Plate, setPlate] = useState("");    //the account has been created and added to blockchain (store that password and address to login as officer)
  const [VCode,setVCode] =useState([])
  const [Msg,setMsg] =useState("");
  const [ListRule,setListRule]=useState([]);


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




  const addChallan=async ()=>{
    
  }






  return (
    <div>
      <Sidenav name0="Officer Panel" name1="Show Traffic Rules" name2="Add Challan" name3="" name4="" link0="/police" link1="/police/showTR" link2="/police/addChallan" link3="/police" link4="/police"/>

      <BackgroundSlider
        images={[background1, background2]}
        duration={8} transition={2} />

      {/* <div>
        <h1 style={{ color: 'white', paddingLeft: '550px', paddingTop: '60px' }}>Add Traffic Rule</h1>


        <Card sx={{ maxWidth: 845, marginLeft: '390px' }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div" style={{ paddingTop: "20px", paddingLeft: "150px" }}>
              Please Fill the relevant details
            </Typography>

            <TextField value={Desc} id="outlined-basic" label="Rule Description" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '20px', width: "520px" }}
              onChange={(e) => { setDesc(e.target.value) }}
            />
            <Typography gutterBottom variant="h6" component="div" style={{ paddingLeft: "20px" }}>
              Enter fine for Category A Vehicle:
            </Typography>
            <input type="number" value={F1} id="outlined-basic" label="A category car fine" variant="outlined" style={{ padding: "13px", color: 'black', marginLeft: '20px', paddingBottom: '30px', width: "120px", height: "4px" }}
              onChange={(e) => { setF1(e.target.value) }}
            />
            <br></br>
            <br></br>
            <Typography gutterBottom variant="h6" component="div" style={{ paddingLeft: "20px" }}>
              Enter fine for Category B Vehicle:
            </Typography>
            <input type="number" value={F2} id="outlined-basic" label="A category car fine" variant="outlined" style={{ padding: "13px", color: 'black', marginLeft: '20px', paddingBottom: '30px', width: "120px", height: "5px" }}
              onChange={(e) => { setF2(e.target.value) }}
            />
            <br></br>
            <br></br>
            <Typography gutterBottom variant="h6" component="div" style={{ paddingLeft: "20px" }}>
              Enter fine for Category C Vehicle:
            </Typography>
            <input type="number" value={F3} id="outlined-basic" label="A category car fine" variant="outlined" style={{ padding: "13px", color: 'black', marginLeft: '20px', paddingBottom: '30px', width: "120px", height: "5px" }}
              onChange={(e) => { setF3(e.target.value) }}
            />
            <br></br>
            <br></br>

            <Button variant="contained" style={{ marginTop: '6px', marginLeft: '20px', paddingBottom: '15px' }} onClick={() => addTrafficRule()}>Add Traffic Rule</Button>

            {Msg == "" ? <div style={{ display: "None" }}></div> :
              <div>
                <Typography gutterBottom variant="h7" component="div" style={{ paddingTop: "20px", paddingLeft: "20px" }}>
                  {Msg}
                </Typography>
              </div>}

          </CardContent>


        </Card>



      </div> */}
    </div>
  );
}

export default AddChallan;
