import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

import { MYNFT1155 } from "../typechain/MYNFT1155";
import { MYNFT1155__factory } from "../typechain/factories/MYNFT1155__factory";


describe("NFT_ERC1155", function () {
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  let mynft1155 : MYNFT1155;

  const uriJson = "https://ipfs.io/ipfs/QmaPEoC3WY9bYnieoK8ekTvLWvTgEasQm1KKekoa1dtARs/1.json";
  const countNftToken = 100;

  // создаём экземпляры контракта
  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
    const NFT1155_ = await ethers.getContractFactory("MYNFT1155") as MYNFT1155__factory;
    mynft1155 = await NFT1155_.deploy() as MYNFT1155;
    await mynft1155.deployed();
  });

  it("Checking Mint() and uri()", async function () {
    // минтим нашу инфтишку
    await mynft1155.mint(owner.address, uriJson, countNftToken);
    // проверяем количество наминтенных токенов
    expect(await mynft1155.balanceOf(owner.address, 0)).to.equal(countNftToken);
    // Проверяем урл
    expect(await mynft1155.uri(0)).to.equal(uriJson);
  });

});
