# Project Title: NFT Bridge From Sepolia to Amoy using FX Portal

In this Project, we are Batch Minting 5 Nfts (ERC721A Contract) on the Sepolia Network and then we bridge those NFTs to Amoy network using FX Portal.


## Description

* This Project is for demontrating the Bridge Functionality, Now Since Goreli and Mumbai testnets are deprecated, that's why we are using Sepolia and Amoy Network. 
* The Contract StreetNft.sol inherits the ERC721A interface which is ideal for batch minting multiple NFTs at once:
```shell
function batchMintNFT(string[] memory nftURLs, string[] memory prompts) public onlyOwner {
        require(nftURLs.length == prompts.length, "Mismatched arrays length");
        uint256 startTokenId = counter;
        uint256 numberOfTokens = nftURLs.length;

        _safeMint(owner(), numberOfTokens);

        for (uint256 i = 0; i < numberOfTokens; i++) {
            _tokenURIs[startTokenId + i] = nftURLs[i];
            _prompts[startTokenId + i] = prompts[i];
        }

        counter += numberOfTokens;
    }
```


### Installing
* User can fork this repository and the clone it to there local system. 
* User is required to install Node.js prior before executing the program.
*   Install all dependancies by using:
```shell
npm install
Setup your .env file with RPC URL's and your wallet Private Key.
```
### Executing program

1. You first need to compile the contract:
```shell
npx hardhat compile
```

2. Now deploy the contract on sepolia network using the following command:
```shell
npx hardhat run scripts/deploy.js --network sepolia
```

3. Now BatchMint all the NFT's on sepolia network using the following command:
```shell
npx hardhat run scripts/batchMint.js --network sepolia
```
4. Again we now need to deposit the NFT's for the Bridge from Sepolia to Amoy using this command:
```shell
npx hardhat run scripts/approveDeposit.js --network sepolia
```
5. Wait for 20-30 mins for bridge process, after that copy the contract address on the amoy network after it recieves all the NFTs.

6. Finally deploy getBalance.js to amoy network to get the total no. of nft it recieved from that contract:
```shell
npx hardhat run scripts/getBalance.js --network amoy
```
## Help

* Note: you need to have some faucet on both the network
    * Sepolia Faucet: https://cloud.google.com/application/web3/faucet/ethereum/sepolia
    * Amoy Faucet: https://faucet.polygon.technology/ (Joining Polygon Discord is required)
```
npx hardhat help
```
* To understand about avalance go the the docs section by visiting: https://docs.avax.network/
## Authors


## License

This project is licensed under the MIT License - see the LICENSE.md file for details.