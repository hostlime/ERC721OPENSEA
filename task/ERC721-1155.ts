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

// npx hardhat mint1155  
//--contract 0x7b9AA298E3727e2431C925c0ff753Bc2Ea15518E 
//--mintto 0xC263718b809ab3EF9C816d7A2313ef0CA0Bb58a1 
//--uri "https://ipfs.io/ipfs/QmaPEoC3WY9bYnieoK8ekTvLWvTgEasQm1KKekoa1dtARs/7.json" 
//--amount 576  
//--network rinkeby
task("mint1155", "mint NFT (ERC1155)")
    .addParam("contract", "address of deployed contract")
    .addParam("mintto", "address where we want to send nft")
    .addParam("uri", "URI to ipfs json")
    .addParam("amount", "minting some amount of nft copies")
    .setAction(async (taskArgs, hre) => {
        const erc1155 = await hre.ethers.getContractAt("MYNFT1155", taskArgs.contract)
        const [owner] = await hre.ethers.getSigners();

        await erc1155.mint(taskArgs.mintto, taskArgs.uri, taskArgs.amount)
    })