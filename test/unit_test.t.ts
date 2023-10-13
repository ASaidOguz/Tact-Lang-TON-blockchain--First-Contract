import { toNano, type Sender } from "ton-core";
import { Blockchain, type SandboxContract } from "@ton-community/sandbox";
import { SampleTactContract } from "../sources/output/sample_SampleTactContract";
let sender: Sender;
let contract: SandboxContract<SampleTactContract>;


(async () => {
    const blockchain = await Blockchain.create();
    const deployer = await blockchain.treasury("deployer");
    const add_value =54
    sender =  deployer.getSender();
    contract = blockchain.openContract(await SampleTactContract.fromInit(deployer.address));
    const addresses = {
      [deployer.address.toString()]: "deployer",
      [contract.address.toString()]: "contract",
    }
    await contract.send(deployer.getSender(), { value: toNano(1) }, { $$type: "Deploy",queryId: 0n})
   console.log(`Contract Address:${contract.address}`)
   console.log(`Post-incremented value:${await contract.getCounter()}`)
            //increment message sending  
            await contract.send(sender, { value: toNano(1) }, "increment")
    console.log(`İncremented value:${await contract.getCounter()}`)
    
    await contract.send(deployer.getSender(),{value:toNano(1)},{$$type:"Add",amount:25n})
    console.log(`Added value:${await contract.getCounter()}`)

})()