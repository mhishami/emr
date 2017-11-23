var EMRToken = artifacts.require("./EMRToken.sol");

contract('EMRToken', (accounts) => {

  let symbol = 'EMR';
  let name = 'Emergency Medical Token'
  let decimals = 18;

  let account1 = accounts[0];

  it('Symbol should be ' + symbol, () => {
    return EMRToken.deployed().then((instance) => {
      return instance.symbol.call()
    }).then((sym) => {
      assert.equal(symbol, sym, 'Symbol should be EMR');
    });
  });
  it('Name should be ' + name, () => {
    return EMRToken.deployed().then(inst => {
      return inst.name.call();
    }).then(nm => {
      assert.equal(name, nm, 'Name should be ', name);
    });
  });

  it('Decimals should be ' + decimals, () => {
    return EMRToken.deployed().then(inst => {
      return inst.decimals.call();
    }).then(d => {
      assert.equal(decimals, d, 'Decimals should be ', decimals);
    });
  });

  it('Account1 balance should be 0', () => {
    return EMRToken.deployed().then(inst => {
      return inst.balanceOf(account1);
    }).then(bal => {
      assert.equal(bal, 0, 'balance should be 0');
    });
  });

  it('Total supply should be 0', () => {
    return EMRToken.deployed().then(inst => {
      return inst.totalSupply();
    }).then(bal => {
      assert.equal(bal, 0, 'total supply should be 0');
    });
  });

  it('Account1 should have 5000 EMR', () => {
    let instance;
    return EMRToken.deployed().then(inst => {
      instance = inst;
      return inst.mint(account1, 5000);
    }).then(rcpt => {
      return instance.balanceOf(account1);
    }).then(bal => {
      assert.equal(5000, bal, 'Balance should be 5000');
    });
  });

  it('Total Supply should have 5000 EMR', () => {
    return EMRToken.deployed().then(inst => { 
      return inst.totalSupply();
    }).then(bal => {
      assert.equal(5000, bal, 'Total supply should be 5000');
    });
  });

});