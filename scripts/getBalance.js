const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/RainNFT.sol/RainNFT.json");

const tokenAddress = "0x3Ca96dE7f3040e464f877EE97812F192DBc91eA7"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xaA862fbC4Ceb73C64F7eed6687adB72FB3799D4b";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  }
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });