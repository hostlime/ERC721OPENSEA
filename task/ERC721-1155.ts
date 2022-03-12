import { task } from "hardhat/config";


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("mint", "mint NFT (ERC720)")
    .addParam("contract", "address of deployed contract")
    .addParam("mintto", "address where we want to send nft")
    .addParam("uri", "URI to ipfs json")
    .setAction(async (taskArgs, hre) => {
        const erc721 = await hre.ethers.getContractAt("NFT721", taskArgs.contract)
        await erc721.safeMint(taskArgs.mintto, taskArgs.uri)
    })