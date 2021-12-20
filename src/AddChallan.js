import './App.css';
import BackgroundSlider from 'react-background-slider'
import Button from '@mui/material/Button';
import { TextField, Input, TextareaAutosize } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import {  BrowserRouter as Router,
    Link, } from "react-router-dom";
import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import Cookies from 'universal-cookie';
// import { useSelector,useDispatch } from 'react-redux'; //redux
// import {StorePrivate,ClearPrivateData} from './actions/index' //redux

const style1 = { fill: 'grey',marginLeft:'10px' }

//
function AddChallan() {



    const [privateKey, setPrivateKey] = useState("");
    const [publicKey, setPublicKey] = useState("");
    const [loginPass, setloginPass] = useState('');
    // console.log(str)


      const [License, setLicense] = useState('');
      const [Name, setName] = useState('');
      const [CNIC, setCNIC] = useState('');
      const [Plate, setPlate] = useState('');
      const [CarType, setCarType] = useState('');
      const [ListRule, setListRule] = useState([]);
      const [Msg, setMsg] = useState('');
      const [VCode, setVCode] = useState([]);


      const options = [
        'Motorcycle', 'Motorcar', 'Jeep','PublicServiceVehicle','PrivateCarrier','PublicCarrier'
      ];

      const options1 = [
        { value: 0, label: 'Motorcycle' },
        { value: 1, label: 'Motorcar' },
        { value: 2, label: 'Jeep' },
        { value: 3, label: 'PublicServiceVehicle'},
        { value: 4, label: 'PrivateCarrier'},
        { value: 5, label: 'PublicCarrier'}
      ];

      const defaultOption = options[0];

     // console.log(VCode)

     const array = []



      function VcodeF(code){
        //console.log(code.value)
        //// setVCode.push(code)
        // console.log(VCode[0])
        array.push(code.value)
        //console.log(array)
      }

      function add(){
          setVCode(array)
      }

      console.log(VCode);

    return (
        <div style={{backgroundColor:'khaki',height:"1000px"}}>
            <Link to="/"><Button variant="contained">Back</Button></Link>
            <div>
                <Card sx={{ maxWidth: 700, marginLeft: '500px' }}>
                    <CardContent style={{marginLeft:70}}>
                        <Typography gutterBottom variant="h5" component="div" style={{marginLeft:170}}>
                            Add Challan
                        </Typography>
                        <br />
                        <TextField id="outlined-basic" label="Enter Name" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px' }} 
                        onChange={(e) => {setName(e.target.value)}}
                        />
                        <TextField id="outlined-basic" label="Enter License ID" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px' }} 
                        onChange={(e) => {setLicense(e.target.value)}}
                        />
                         <TextField id="outlined-basic" label="Enter CNIC" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px' }} 
                        onChange={(e) => {setCNIC(e.target.value)}}
                        />
                         <TextField id="outlined-basic" label="Enter Plate No" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px' }} 
                        onChange={(e) => {setPlate(e.target.value)}}
                        />
                        
                         <TextField id="outlined-basic" label="Enter Car Type" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px' }} 
                        onChange={(e) => {setCarType(e.target.value)}}
                        />
                        <TextField id="outlined-basic" label="Enter Message" variant="outlined" style={{ color: 'wheat', marginLeft: '20px', paddingBottom: '30px' }} 
                        onChange={(e) => {setMsg(e.target.value)}}
                        />
                        <Dropdown options={options1} placeholder="Select Rule" />
                        <br />
                        <Dropdown options={options1} placeholder="Select a Vehicle" onChange={(value)=>VcodeF(value)} />
                        < br />
                        < br />
                        < br />
                        < br />
                        < br />
                        < br />
                        < br />
                        <Button variant="contained" style={{ marginLeft: '195px', paddingBottom: '10px' }} onClick={add}>Add Challan</Button>
                        <br />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default AddChallan;
