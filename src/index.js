import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import {createBrowserHistory} from 'history';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Block from './Block';
import Admin from './admin';
import Citizen from './Citizen';
import AddTP from './AddTP';
import AddTR from './AddTR';
import GetTR from './GetTR';
import Police from './Police';
import PShowTR from './PShowTR';
import AddChallan from './AddChallan';
import CShowTR from './CShowTR';
import CShowChallanHistory from './CShowChallanHistory';
import CPayChallan from './CPayChallan';



const history = createBrowserHistory({basename : `${process.env.PUBLIC_URL}`});


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Main />} />
        <Route path="/block" caseSensitive={false} element={<Block />} />
        <Route path="admin" caseSensitive={false} element={<Admin />} />
        <Route path="admin/addTP" caseSensitive={false} element={<AddTP />} />
        <Route path="admin/addTR" caseSensitive={false} element={<AddTR />} />
        <Route path="/admin/showTR" caseSensitive={false} element={<GetTR />} />
        <Route path="police" caseSensitive={false} element={<Police />} />
        <Route path="police/showTR" caseSensitive={false} element={<PShowTR />} />
        <Route path="police/addChallan" caseSensitive={false} element={<AddChallan />} /> 
        <Route path="citizen" caseSensitive={false} element={<Citizen />} />
        <Route path="citizen/CShowTR" caseSensitive={false} element={<CShowTR />} />

        <Route path="citizen/CChallanHistory" caseSensitive={false} element={<CShowChallanHistory />} />
        <Route path="citizen/CPayChallan" caseSensitive={false} element={<CPayChallan />} />
        
        
      </Routes>
    </Router>
      )  
    }
};


ReactDOM.render(
   <App />
  , document.querySelector('#root'));
reportWebVitals();
