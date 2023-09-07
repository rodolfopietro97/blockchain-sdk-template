import { ethers } from "ethers";

console.log("Hello wodld! from provider package")
console.log(ethers.keccak256(ethers.toUtf8Bytes("Hello world")))