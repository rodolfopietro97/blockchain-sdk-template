import { ethers } from "ethers";
import { TEST_IMPORT_NESTED } from "../../core/src/Constants.js";

console.log("Hello wodld! from core network")
console.log(ethers.keccak256(ethers.toUtf8Bytes("Hello world")))
console.log(TEST_IMPORT_NESTED)