# Workshop 2

In this workshop we will be taking a quick look at building a DApp, and then we will let you take over and build one yourself. 

The challenge is, in your groups, identify an idea and implement an MVP DApp. Each member of the group must make at least 1 commit to the repo.


## Getting Started

One person can fork this repo: #INSERT-EDITED-PET-SHOP 
and give all team members permission to push.


Send the link to your repo to your team-mates.


Each person should work on a separate branch to avoid a conflict nightmare. You can simply use your name as your branch name.

```
git checkout -b your-branch-name
```


Then when you have coded something:

```
git push -u origin your-branch-name
```


Work together to make something interesting!

### Ideas

A few ideas that might inspire you:

- Cape Town water vouchers.
- Your own token
- Crypto-*insert-animated-object-here*
- Donate to charity
- Bet on the world cup



### Setting up the development environment

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


### The Development Process

- Start by thinking of the problem and how you are going to solve it

- Once your team has decided and agreed, think how the smart contract should look before even beginning coding. 
    - When writing smart contracts, most of your time should be spent on thinking about the contract and not coding it. The code is not long but the possibility for failure is in some ways greater than in regular programs. This is particularly necessary when the contract is financial.
    - More about [smart contract security](https://solidity.readthedocs.io/en/latest/security-considerations.html)

- Start writing the first iteration of your smart contract using [Remix](https://remix.ethereum.org). The compiler assistance is seriously great and it takes no setup.

- Once you have something that more or less works, throw it into truffle and set up a front end to interact with the contract.

- Iterate



### Troubleshooting

#### Compiling or Migrating Contracts

If you get the error when compiling or migrating your contracts:
```
Error: Attempting to run transaction which calls a contract function, but recipient address 0xcaa23447f661e52a0d1fb3c5ab9d743c899721a3 is not a contract address
```

Try delete the contracts folder in the build directory and rerun `compile` and `migrate`.


#### Metamask Transactions Fail with Incorrect Nonce

If Metamask transactions to the contract fail with the error:
```
Error: the transaction doesn't have the correct nonce
```
Disconnect from the Ganache blockchain by connecting to Ropsten. Then Reconnect to Ganache.
