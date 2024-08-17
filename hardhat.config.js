require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: '0.8.20',
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY]
    },
    amoy: {
      url: process.env.AMOY_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY]
    }
  }
};
