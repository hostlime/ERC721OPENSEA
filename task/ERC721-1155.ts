import { task } from "hardhat/config";


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// npx hardhat mint  
    //--contract 0xD8B23F016ec9A727473D80A3ED801187cec26891 
    // --mintto 0xC263718b809ab3EF9C816d7A2313ef0CA0Bb58a1 
    // --uri "https://gateway.pinata.cloud/ipfs/QmaY81uPz7hxZnuDFiRE3X8qANCu3Y33ovAKWwYvZGKGoC" 
    // --network rinkeby
task("mint", "mint NFT (ERC720)")
    .addParam("contract", "address of deployed contract")
    .addParam("mintto", "address where we want to send nft")
    .addParam("uri", "URI to ipfs json")
    .setAction(async (taskArgs, hre) => {
        const erc721 = await hre.ethers.getContractAt("NFT721", taskArgs.contract)
        await erc721.safeMint(taskArgs.mintto, taskArgs.uri)
    })