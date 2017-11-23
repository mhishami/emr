pragma solidity ^0.4.11;

import "zeppelin-solidity/contracts/token/MintableToken.sol";

/**
 * The EMRToken contract does this and that...
 */
contract EMRToken is MintableToken {

  string public name = "Emergency Medical Token"; 
  string public symbol = "EMR";
  uint public decimals = 18;

  function EMRToken () {    
  }  

}

