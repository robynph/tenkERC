var TenkToken = artifacts.require('tenktoken');
module.exports = function(deployer) {
    deployer.deploy(TenkToken, '10kname','10ksym',10);
    // Additional contracts can be deployed here
};
