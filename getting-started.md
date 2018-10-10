## Setting up the development environment

There are a few technical requirements before we start. Please install the following:

*   [Node.js v6+ LTS and npm](https://nodejs.org/en/) - javascript modules
*   [Git](https://git-scm.com/)
*   [Metamask](https://metamask.io/) - a browser extension Ethereum wallet
*   [Ganache](http://truffleframework.com/ganache) - personal blockchain for Ethereum

Once we have those installed, we only need one command to install Truffle:

```shell
npm install -g truffle
```

Once Ganache is downloaded, start your own local blockchain by simply opening it. You will see several Ethereum accounts with some test Ether that you will use to interact with your contracts.




## Troubleshooting

### Compiling or Migrating Contracts

If you get the error when compiling or migrating your contracts:
```
Error: Attempting to run transaction which calls a contract function, but recipient address 0xcaa23447f661e52a0d1fb3c5ab9d743c899721a3 is not a contract address
```

Try delete the contracts folder in the build directory and rerun `compile` and `migrate`.


### Metamask Transactions Fail with Incorrect Nonce

If Metamask transactions to the contract fail with the error:
```
Error: the transaction doesn't have the correct nonce
```
Disconnect from the Ganache blockchain by connecting to Ropsten. Then Reconnect to Ganache.