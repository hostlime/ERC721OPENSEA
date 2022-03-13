// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MYNFT1155 is ERC1155, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter internal _ids;
    mapping (uint256 => string) private _tokenURIs;
    
    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/QmaPEoC3WY9bYnieoK8ekTvLWvTgEasQm1KKekoa1dtARs/{id}.json"
        )
    {}
    
    function uri(uint256 tokenId) override public view 
    returns (string memory) { 
        return(_tokenURIs[tokenId]); 
    } 

    function _setTokenUri(uint256 tokenId, string memory tokenURI)
    private {
         _tokenURIs[tokenId] = tokenURI; 
    } 

    function mint(address account, string memory _tokenURI_, uint256 amount) public onlyOwner {
        uint256 ids = _ids.current();
        _ids.increment();
        _mint(account, ids, amount, "");
        _setTokenUri(ids, _tokenURI_);
    }
}