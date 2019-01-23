pragma solidity ^0.4.25;
// Solidity version 0.4.25 is the latest and greatest and there are probably
// some breaking changes that I'm unaware of. If you happen to spot any, let
// me know via a github issue.

// I usually write the contract in remix and test and debug there,
// then copy it into truffle to build the front-end of the DApp.
// Remix: https://remix.ethereum.org

// Sign the digital register for the Cryptosoc workshops
contract WorkshopRegister {
  uint workshopCost;

    // a mapping is an efficient data structure that can map every possible
  // thing to something else - in this case, addresses to booleans
  mapping(address => bool) private register;

  // An event that will emit when someone has attended
  event Signed(address _attendee);

  // A constructor that sets up the Workshop parameters
  // in this case, the cost of the workshop
  constructor (uint costInEther) public {
    workshopCost = costInEther;
  }

  // Add your address as your signature to the register
  function signRegister() public {
    address signature = msg.sender;
    register[signature] = true;
  }


  // Add your address as your signature to the register for a payed workshop
  function signRegisterPayed() public payable {
    require(msg.value >= workshopCost);

    address signature = msg.sender;
    register[signature] = true;

    // Emit an event on success
    emit Signed(msg.sender);
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
