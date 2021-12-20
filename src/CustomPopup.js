import { useEffect, useState } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
import { TextField, Input, TextareaAutosize } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

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
        <TextField id="outlined-basic" label="Enter Your Address" variant="outlined" style={{ color: 'wheat', marginLeft: '80px', paddingBottom: '30px' }} 
         />
         <br />
         <TextField id="outlined-basic" label="Enter Password" variant="outlined" style={{ color: 'wheat', marginLeft: '80px', paddingBottom: '30px' }} 
         />
         <br />
         <Button variant="contained" style={{ marginLeft: '145px', paddingBottom: '15px' }}>Login</Button>
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