// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC1155, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter internal _ids;

    constructor()
        ERC1155(
            "https://gateway.pinata.cloud/ipfs/QmaY81uPz7hxZnuDFiRE3X8qANCu3Y33ovAKWwYvZGKGoC"
        )
    {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 amount) public onlyOwner {
        uint256 ids = _ids.current();
        _mint(account, ids, amount, "");
    }
}
