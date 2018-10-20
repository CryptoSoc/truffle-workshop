// Update your migrations if you change the name of the contracts 
// or add new ones

var WorkshopRegister = artifacts.require("./WorkshopRegister.sol");

module.exports = function(deployer) {
  deployer.deploy(WorkshopRegister, 0);
};
