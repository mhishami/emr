var EMRToken = artifacts.require("./EMRToken.sol");

module.exports = function(deployer) {
  deployer.deploy(EMRToken);
};
