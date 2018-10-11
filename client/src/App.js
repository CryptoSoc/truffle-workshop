import React, { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap';
import WorkshopRegisterContract from "./contracts/WorkshopRegister.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";

import "./App.css";

class App extends Component {
  // signed state stores if the current user has signed the contract
  // isLoading disables the button when querying the contract
  state = { signed: false, web3: null, accounts: null, contract: null, isLoading: false };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(WorkshopRegisterContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    this.setState({ isLoading: true });

    // Sign the register
    await contract.signRegister( { from: accounts[0] });

    // Check you signed the register to prove it worked.
    const response = await contract.checkRegister(accounts[0]);

    // Update state with the result.
    this.setState({
      signed: response,
      isLoading: false
    })
  };

  render() {
    const { isLoading, signed } = this.state;

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract. Make sure Metamask is unlocked and connected to the Ganache network.</div>;
    }
    return (
      <div className="App">

        <Jumbotron>
          <h1>Sign the Decentralized Register</h1>
          <p>
            Congratulations! You've launched a DApp. Now go and make this much better! And don't forget to sign the register:
          </p>
          <p>
            <Button
              bsStyle="primary"
              disabled={isLoading}
              onClick={!isLoading ? this.runExample : null}
            >
              {isLoading ? 'Loading...' : 'Sign Now'}
            </Button>
          </p>
        </Jumbotron>
        <div>
          {signed ? (
            <p>
              You haven't signed the register yet!
            </p>
          ) : (
            <p>
              Thanks for signing!
            </p>
          )}

        </div>
      </div>
    );
  }
}

export default App;
