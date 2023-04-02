require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"hardhat",
  networks:{
    localhost:{
      url:"xxxx",
      //accounts:["xxxxxxxxxxxxxxxxxxxxxxxxxx"],
      chainId:13337
    }
  },
  gasReporter:{
    enabled:true,
    outputFile:"./gas.txt"
  },
  etherscan:{
    apiKey:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
};
