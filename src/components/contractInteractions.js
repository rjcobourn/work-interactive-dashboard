import { ethers } from "ethers";

const workImplementationABI = require('./workImplementationABI.json') 
const workContractAddress = '0x6002410dDA2Fb88b4D0dc3c1D562F7761191eA80';
const provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com/');
const workContract = new ethers.Contract(workContractAddress, workImplementationABI, provider)

async function totalWork() {
  let totalSupply = await workContract.totalSupply();
  console.log(ethers.utils.commify(ethers.utils.formatEther(totalSupply)));
}

async function WORKPrice() {
  const sushiAPIResponse = await fetch('https://api2.sushipro.io/?chainID=137&action=get_pair&pair=0xab0454b98daf4a02ea29292e6a8882fb2c787dd4');
  const sushiAPIJSON = await sushiAPIResponse.json();
  console.log(sushiAPIJSON[0].Token_1_price)
}

export { totalWork, WORKPrice };