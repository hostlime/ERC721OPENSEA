import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { NFT721 } from "../typechain/NFT721";
import { NFT721__factory } from "../typechain/factories/NFT721__factory";


describe("NFT_ERC721", function () {
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  let nft721 : NFT721;

  

  const nft721Name = "NFTCinema";
  const nft721Symbol = "TV";
  const uriNft = "https://gateway.pinata.cloud/ipfs/QmaY81uPz7hxZnuDFiRE3X8qANCu3Y33ovAKWwYvZGKGoC";


  // создаём экземпляры контракта
  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const NFT721_ = await ethers.getContractFactory("NFT721") as NFT721__factory;
    nft721 = await NFT721_.deploy() as NFT721;
    await nft721.deployed();
  });

  it("Checking name()", async function () {
    // name()
    expect(await nft721.name()).to.equal(nft721Name);
  });
  it("Checking symbol()", async function () {
    // symbol()
    expect(await nft721.symbol()).to.equal(nft721Symbol);
  });
  it("Checking safeMint()", async function () {
    // минтим нашу инфтишку
    await nft721.safeMint(owner.address, uriNft);
    // проверяем что она есть 
    expect(await nft721.tokenURI(0)).to.equal(uriNft);
  });

});
