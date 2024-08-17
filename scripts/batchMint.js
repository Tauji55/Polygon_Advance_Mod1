const tokenContractJSON = require("../artifacts/contracts/RainNFT.sol/RainNFT.json");
require('dotenv').config();

const tokenAddress = "0x197ea182455fA7D588E1e58F65B68B607c3Efd4D"; // deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xaA862fbC4Ceb73C64F7eed6687adB72FB3799D4b";

async function main() {
  const nft = await ethers.getContractAt("RainNFT", tokenAddress);
  const tokenURIs = [
    "ipfs://QmTzMKmb8r1PomvUtYeHit538Vuej7eH5UU4VBmtmerGT1",
    "ipfs://QmZVbBrp96CyGCJ4BSZ5jF5n3M6HqnEef5kivG3cXoSJgw",
    "ipfs://QmboihePqmoXzrQWvgJDypEcUVJA4KJUzkJVZzfhfQozKT",
    "ipfs://QmWCrNEffGtzM9iUkD2S5uQwkCcNRQmKYj2nixUDUFm5cE",
    "ipfs://QmY2PaqWLHbXhp93Lw7SFot1nQQv2d2mjzbJVa7uSKoeyK"
  ];

  const prompts = [
    "Generate a watercoloured photo of a japanese girl in a raincoat. She is standing alone on a deserted road at night. The stars shining through the sky brightly. There are bushes and farms at the side of the road. The girl's face is hidden under the cap of the raincoat.",
    "Generate a watercoloured photo of a japanese girl and a boy huddled together sharing a single raincoat. They have their heads covered under the lone raincoat. They are standing alone on a deserted road at night. The stars shining through the sky brightly. There are bushes and farms at the side of the road.",
    "Generate a watercoloured image of a transparent Frock like raincoat. It has a tradtional look with flowers on its seams. Also, splash the background with some watercolours.",
    "Generate a watercoloured image of a tranparent Saree like raincoat. There should be no human involved, just the raincoat. It should look traditional.",
    "Generate a watercoloured photo of a girl and her pet dog both wearing raincoats. They are taking a walk on a road. The stars are shining through the night sky brightly. There are farms and bushes on the sides of the road. The surface of the road itself is shiny and wet due to rain."
  ];

  await nft.batchMintNFT(tokenURIs, prompts);
  console.log(`Minted ${tokenURIs.length} NFTs to ${walletAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
