# Example NFT721 and NFT1155 for opensea

 Примеры контрактов NFT стандартов ERC-721, ERC-1155 совместимые с opensea. 

- Контракт ERC721 https://rinkeby.etherscan.io/address/0xd8b23f016ec9a727473d80a3ed801187cec26891#code
- Контракт ERC1155 https://rinkeby.etherscan.io/address/0x7b9aa298e3727e2431c925c0ff753bc2ea15518e#code
- ipfs json https://ipfs.io/ipfs/QmaPEoC3WY9bYnieoK8ekTvLWvTgEasQm1KKekoa1dtARs
- ipfs картинки https://ipfs.io/ipfs/QmYJZwwVStq7fTZd8CeS6ykBs7g6sRvZLv6B7ZBHkvfSnM


### NFT1155
- https://testnets.opensea.io/assets/0x7b9aa298e3727e2431c925c0ff753bc2ea15518e/0
- https://testnets.opensea.io/assets/0x7b9aa298e3727e2431c925c0ff753bc2ea15518e/1
- https://testnets.opensea.io/assets/0x7b9aa298e3727e2431c925c0ff753bc2ea15518e/2
- https://testnets.opensea.io/assets/0x7b9aa298e3727e2431c925c0ff753bc2ea15518e/3
- https://testnets.opensea.io/assets/0x7b9aa298e3727e2431c925c0ff753bc2ea15518e/4

### NFT721
- https://testnets.opensea.io/assets/0xd8b23f016ec9a727473d80a3ed801187cec26891/1

### сформированы task, пример:
```
npx hardhat mint  --contract 0xD8B23F016ec9A727473D80A3ED801187cec26891 --mintto 0xC263718b809ab3EF9C816d7A2313ef0CA0Bb58a1 --uri "https://gateway.pinata.cloud/ipfs/QmaY81uPz7hxZnuDFiRE3X8qANCu3Y33ovAKWwYvZGKGoC"  --network rinkeby
 
npx hardhat mint1155  --contract 0x7b9AA298E3727e2431C925c0ff753Bc2Ea15518E --mintto 0xC263718b809ab3EF9C816d7A2313ef0CA0Bb58a1 --uri "https://ipfs.io/ipfs/QmaPEoC3WY9bYnieoK8ekTvLWvTgEasQm1KKekoa1dtARs/7.json" --amount 576  --network rinkeby
```