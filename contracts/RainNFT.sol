// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RainNFT is ERC721A, Ownable {
    uint256 public counter;
    mapping(uint256 => string) private _tokenURIs;
    mapping(uint256 => string) private _prompts;

    constructor() ERC721A("MayaCoin", "MAYA") Ownable(msg.sender){
        counter = 0;
    }

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

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId < counter, "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        require(tokenId < counter, "Prompt query for nonexistent token");
        return _prompts[tokenId];
    }
}
