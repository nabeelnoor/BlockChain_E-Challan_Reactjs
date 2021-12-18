import React, { Component } from "react";
import Web3 from "web3";
import { SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS } from './config'

class App extends Component {
  constructor() {
    super()
    this.state = { account: '', simpcontract: '', value: '' }
  }

  componentDidMount() {
    this.loadBlockChainData()
  }

  async loadBlockChainData() {
    const web3 = new Web3("http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const simpstorage = new web3.eth.Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);
    console.log(simpstorage)
    this.setState({ simpcontract: simpstorage })
    const value = await simpstorage.methods.get().call()
    this.setState({ value: value })
  }

  
  render() {
    const getTotalAccount=async ()=>{
      const web3 = new Web3("http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
      console.log("Length:",accounts.length)
      console.log(accounts)
    }
    const createAccount=()=>{
      //this will create account from scratch
      
      // let accounts = new Accounts('http://localhost:7545');
      // var Accounts = require('web3-eth-accounts');
      const web3 = new Web3("http://localhost:7545")
      let temp=web3.eth.accounts.create();
      console.log(temp)


    }
    // return (
    //   // <h1>{this.state.account}</h1>

    //   <h1>Current Value of Stored Data:{this.state.value}</h1>
    // );

    return (
      < div>
        <h1>Your account: {this.state.account}</h1>
        <h1>The value of X: {this.state.value}</h1>
        < form onSubmit={(event) => {
          event.preventDefault()
          const valueField = new FormData(event.target).get("valueField");
          this.state.simpcontract.methods.set(valueField).send({
            from:
              this.state.account
          })
          // this.loadBlockchainData()
        }} >
          <input id="field" name="valueField" type="text" required />
          <br/>
          < input type="submit" hidden="" />
        </ form>

        <button onClick={createAccount}>create Account</button>
        <button onClick={getTotalAccount}>getTotalAccount</button>
      </ div>
    );
  }
};

export default App;