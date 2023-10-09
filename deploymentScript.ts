import * as fs from 'fs';
import * as path from 'path';
import { Address, contractAddress } from "ton";
import { SampleTactContract } from "./sources/output/sample_SampleTactContract";
import { prepareTactDeployment } from "@tact-lang/deployer";
 (async()=>{
// Parameters
let testnet = true;                                 // Flag for testnet or mainnet
let packageName = 'sample_SampleTactContract.pkg';  // Name of your package to deploy
let outputPath = path.resolve(__dirname, 'sources/output'); // Path to output directory
const DEPLOYER_ADDRESS=Address.parse("EQDjUc7m2zSZ_oWh4wvmLf5a3UqOUfSzvBODeY5RXy9EWy7p")
   // Our sample contract has an owner
let init = await SampleTactContract.init(DEPLOYER_ADDRESS);    // Create initial data for our contract
 
// Calculations
let address = contractAddress(0, init);     // Calculate contract address. MUST match with address in the verifier
let data = init.data.toBoc();               // Create init data
let pkg = fs.readFileSync(                  // Read package file
    path.resolve(outputPath, packageName)
);
 
// Prepare deploy
let link = await prepareTactDeployment({ pkg, data, testnet });
 
// Present a deployment link and contract address
console.log('Address: ' + address.toString({ testOnly: testnet }));
console.log('Deploy link: ' + link);
})()