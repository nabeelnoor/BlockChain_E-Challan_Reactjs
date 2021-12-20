import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import {createBrowserHistory} from 'history';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Block from './Block';



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
        {/* <Route path="admin" caseSensitive={false} element={<Register />} />
        <Route path="citizen" caseSensitive={false} element={<Chat />} />
        <Route path="police" caseSensitive={false} element={<Test />} /> */}
      </Routes>
    </Router>
      )  
    }
};


ReactDOM.render(
   <App />
  , document.querySelector('#root'));
reportWebVitals();
