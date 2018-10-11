pragma solidity ^0.4.24;
// Solidity version 0.4.25 is the latest and greatest and there are probably
// some breaking changes that I'm unaware of. If you happen to spot any, let
// me know via a github issue.

// I usually write the contract in remix and test and debug there,
// then copy it into truffle to build the front-end of the DApp.
// Remix: https://remix.ethereum.org

// Sign the digital register for the Cryptosoc workshops
contract WorkshopRegister {

  // a mapping is an efficient data structure that can map every possible
  // thing to something else - in this case, addresses to booleans
  mapping(address => bool) private register;


  // Add your address as your signature to the register
  function signRegister() public {
    address signature = msg.sender;
    register[signature] = true;
  }


  // Check if you have successfully signed the register
  function checkRegister(address myAddress) public view returns (bool) {
    return register[myAddress];
  }


  // A payable function that would tip the contract i.e. no-one
  // This has nothing to do with the register and is added 
  // for additional functionality. There is currently nothing connected
  // to this on the front end either.

  // function tip() public payable {
  //   Implement this
  // }
}
