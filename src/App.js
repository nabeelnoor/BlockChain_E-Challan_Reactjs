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
    
    const getTotalAccount = async () => {
      const web3 = new Web3("http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
      console.log("Length:", accounts.length)
      console.log(accounts)
    }

    const createAccount = () => {
      //this will create account from scratch
      const web3 = new Web3("http://localhost:7545")
      //1.method 1 will create account but not store to ganache
      // let temp = web3.eth.accounts.create();
      // console.log(temp)

      //2.method 2 store to ganace
      let finalResult = web3.eth.personal.newAccount("password")
        .then((result) => {
          console.log(result)
        })
      console.log(finalResult)

    }

    const doTransaction = () => {
      const web3 = new Web3("http://localhost:7545")
      //this will sign transaction and display result not updated to blockChain
      let tempo = web3.eth.accounts.signTransaction({
        to: '0x15895791421fe43Cb601e7bb50498e9bFACC20f1',
        value: '1000000000',
        gas: 2000000
      }, '0xbcffa1518a9408727849802aef7a6bf53d5e7f99c05625773c47e41bb811c928').then(console.log)
      // console.log(tempo)
    }

    const callContract = async () => {
      const web3 = new Web3("http://localhost:7545")
      //perfectly working with the blockChain to call contract
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
      //call to not payable function
      contract.methods.get()
        .call({ from: '0x172DDf7F7f8e1fFf5f04ba1b8Cd8Ed5242D43e73' },
          function (error, result) {
            console.log(result)
          });


      // call to payable function
      //you have to unlock account
      web3.eth.personal.unlockAccount('0x172DDf7F7f8e1fFf5f04ba1b8Cd8Ed5242D43e73', 'password', 50000).then(
        () => {
          contract.methods.set(150)
            .send({ from: '0x172DDf7F7f8e1fFf5f04ba1b8Cd8Ed5242D43e73' })
            .on('receipt', function (receipt) {
              console.log(receipt)
              web3.eth.personal.lockAccount('0x172DDf7F7f8e1fFf5f04ba1b8Cd8Ed5242D43e73') //now again lock the account
            });
        }
      )
      // console.log(tempo)

      // await web3.eth.personal.lockAccount('0x172DDf7F7f8e1fFf5f04ba1b8Cd8Ed5242D43e73')


    }

    const deployContract = () => {
      const web3 = new Web3("http://localhost:7545")
      //perfectly working with the blockChain to call contract
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
      console.log(contract.options.jsonInterface)
      // let Contract = require('web3-eth-contract');
      // Contract.setProvider("http://localhost:7545");

      

    }
    
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
          <br />
          < input type="submit" hidden="" />
        </ form>

        <button onClick={createAccount}>create Account</button>
        <button onClick={getTotalAccount}>getTotalAccount</button>
        <button onClick={doTransaction}>doTransaction</button>
        <button onClick={callContract}>callContract</button>
        <button onClick={deployContract}>deployContract</button>
      </ div>
    );
  }
};

export default App;