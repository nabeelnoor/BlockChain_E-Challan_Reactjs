import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { TextField, Input, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Web3 from "web3";
import { catchClause } from "@babel/types";


const CustomPopup = (props) => {
  const [show, setShow] = useState(false);
  const [Decider, setDecider] = useState(0);
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Msg, setMsg] = useState("");

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
    setDecider(props.panel);
    setPassword("");
    setAddress("");
    console.log(Decider);
  }, [props.show]);

  const login = async () => {
    try {
      console.log("Address:",Address,"PSWD:",Password)
      const web3 = new Web3("http://localhost:7545")
      web3.eth.personal.unlockAccount(Address, Password, 50000).then(result => {
        setPassword("")
        setAddress("")
        if (Decider == 0) {//citizen
          localStorage.setItem('id', Address)
          localStorage.setItem('pswd', Password)
          window.location.href = `http://localhost:3000/citizen`
        } else if (Decider == 1) {
          localStorage.setItem('id', Address)
          localStorage.setItem('pswd', Password)
          window.location.href = `http://localhost:3000/police`
        } else if (Decider == 2) {//admin
          localStorage.setItem('id', Address)
          localStorage.setItem('pswd', Password)
          window.location.href = `http://localhost:3000/admin`
        }
      })
    } catch (e) {
      console.log("\nAddress", Address, "\nPass:", Password)
      setMsg("You have entered Invalid Address or pswd")
      setPassword("")
      setAddress("")
      console.log(e);
    }
  }

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <h2>{props.title}</h2>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <TextField value={Address} onChange={(value) => { setAddress(value.target.value) }} id="outlined-basic" label="Enter Your Address" variant="outlined" style={{ color: 'wheat', marginLeft: '80px', paddingBottom: '30px' }}
        />
        <br />
        <TextField value={Password} onChange={(value) => { setPassword(value.target.value) }} id="outlined-basic" label="Enter Password" variant="outlined" style={{ color: 'wheat', marginLeft: '80px', paddingBottom: '30px' }}
        />
        <br />
        <Button onClick={login} variant="contained" style={{ marginLeft: '145px', paddingBottom: '15px' }}>Login</Button>
        <br></br>
        {Msg}
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;