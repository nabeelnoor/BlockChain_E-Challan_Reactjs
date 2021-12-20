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
    // const web3 = new Web3("http://localhost:7545")
    // const accounts = await web3.eth.getAccounts()
    // this.setState({ account: accounts[0] })
    // const simpstorage = new web3.eth.Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);
    // console.log(simpstorage)
    // this.setState({ simpcontract: simpstorage })
    // const value = await simpstorage.methods.get().call()
    // this.setState({ value: value })
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
        to: '0x64647B792c7B31904E7a12c3857A54893a8c9ADb',
        value: '1000000000',
        gas: 2000000
      }, '0xbcffa1518a9408727849802aef7a6bf53d5e7f99c05625773c47e41bb811c928').then(console.log)
      // console.log(tempo)
    }

    const addTrafficPolice = async () => {
      let policeOfficer = '0x956Fb5596AEe32C1e9575FeD4526FDBd96634D13';
      let admin='0xF4785b31f0758EDF2704e9518084e2b0C5cA5F7e'
      const web3 = new Web3("http://localhost:7545")
      //perfectly working with the blockChain to call contract
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
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
    }


    const addChallan = async () => {
      let policeOfficer = '0x956Fb5596AEe32C1e9575FeD4526FDBd96634D13';
      const web3 = new Web3("http://localhost:7545")
      //perfectly working with the blockChain to call contract
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
      
      web3.eth.personal.unlockAccount(policeOfficer, 'password', 50000).then(
        () => {
          contract.methods.addChallan("l5","Nabeel","123",1,"123",[0,1],"t")
            .send({ from: policeOfficer,gas:473234,gasPrice:673234})
            .on('receipt', function (receipt) {
              console.log(receipt)
              web3.eth.personal.lockAccount(policeOfficer) //now again lock the account
            });
        }
      )

    }

    const callContract = async () => {
      let temp='0x956Fb5596AEe32C1e9575FeD4526FDBd96634D13'
      const web3 = new Web3("http://localhost:7545")
      //perfectly working with the blockChain to call contract
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
      //call to not payable function
      contract.methods.getTrafficRules()
        .call({ from: temp },
          function (error, result) {
            console.log(result)
          });


      // call to payable function and sending 2 wei
      //you have to unlock account
      web3.eth.personal.unlockAccount(temp, 'password', 50000).then(
        () => {
          contract.methods.test()
            .send({ from: temp, value: web3.utils.toWei('2', 'ether') })
            .on('receipt', function (receipt) {
              console.log(receipt)
              web3.eth.personal.lockAccount(temp) //now again lock the account

            });
        }
      )


    }

    const getAccountBalance = async () => {
      const web3 = new Web3("http://localhost:7545")
      web3.eth.getBalance('0x1FAB079BD68117DC0E8B5d60f269eA1AdAE92e64').then(value => console.log(value.toString()))
    }

    const transferAdmin = async () => {
      let admin='0x2C148c4e5D6d8cd554DC65b7BCe808D4AE97a757'
      const web3 = new Web3("http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract

      contract.methods.transferAdmin(admin)
        .send({ from: accounts[0] },
          function (error, result) {
            console.log("result:", result)
          });

      //display admin
      contract.methods.getOwner()
        .call({ from: admin },
          function (error, result) {
            console.log("\nCurrent Admin", result)
          });
    }

    const addTrafficRule=async ()=>{
      let temp='0x2C148c4e5D6d8cd554DC65b7BCe808D4AE97a757'
      const web3 = new Web3("http://localhost:7545")
      const accounts = await web3.eth.getAccounts()
      //perfectly working with the blockChain to call contract
      let Contract = require('web3-eth-contract');
      Contract.setProvider("http://localhost:7545");
      let contract = new Contract(SIMP_STORAGE_ABI, SIMP_STORAGE_ADDRESS);  //get the instance of contract
      
      // web3.eth.personal.unlockAccount(temp, 'password', 50000).then(
      //   () => {
          contract.methods.addTrafficRule("tempo",10,20,30)
            .send({ from: accounts[0] ,
              gasPrice:90000,
              gas:190000
            
            })
            .on('receipt', function (receipt) {
              console.log(receipt)
              // web3.eth.personal.lockAccount(temp) //now again lock the account

            });
      //   }
      // )
      
      // web3.eth.personal.unlockAccount(temp, 'password', 50000).then(
      //   () => {
      //     contract.methods.payChallan("l8")
      //       .send({ from: temp ,value:web3.utils.toWei('20','Ether')})
      //       .on('receipt', function (receipt) {
      //         console.log(receipt)
      //         web3.eth.personal.lockAccount(temp) //now again lock the account

      //       });
      //   }
      // )
      
      // web3.eth.personal.unlockAccount(temp, 'password', 50000).then(
      //   () => {
      //     contract.methods.activateRule(1)
      //       .send({ from: temp })
      //       .on('receipt', function (receipt) {
      //         console.log(receipt)
      //         web3.eth.personal.lockAccount(temp) //now again lock the account

      //       });
      //   }
      // )
      // web3.eth.personal.unlockAccount(temp, 'password', 50000).then(
      //   () => {
      //     contract.methods.deactivateRule(1)
      //       .send({ from: temp })
      //       .on('receipt', function (receipt) {
      //         console.log(receipt)
      //         web3.eth.personal.lockAccount(temp) //now again lock the account

      //       });
      //   }
      // )
      // web3.eth.personal.unlockAccount(temp, 'password', 50000).then(
      //   () => {
      //     contract.methods.updatePriceForRule(1,11,20,30)
      //       .send({ from: temp })
      //       .on('receipt', function (receipt) {
      //         console.log(receipt)
      //         web3.eth.personal.lockAccount(temp) //now again lock the account

      //       });
      //   }
      // )
    }

    return (
      < div>
        {/* <h1>Your account: {this.state.account}</h1>
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
        </ form> */}

        <button onClick={createAccount}>create Account</button>
        <button onClick={getTotalAccount}>getTotalAccount</button>
        <button onClick={doTransaction}>doTransaction</button>
        <button onClick={callContract}>callContract</button>
        <button onClick={getAccountBalance}>getBalance</button>
        <button onClick={transferAdmin}>changeAdmin</button>
        <button onClick={addChallan}>addChallan</button>
        <button onClick={addTrafficPolice}>addTrafficPolice</button>
        <button onClick={addTrafficRule}>addTrafficRule</button>
      </ div>
    );
  }
};

export default App;