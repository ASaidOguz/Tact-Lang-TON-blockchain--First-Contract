# TACT Language First Contract 

[x] Simple increment contract using deployment library for convenient deployment

Steps to follow create your own contract compile and deployment environments
     
- Create a folder and setup the compiler via 
   
   ```
   yarn add @tact-lang/compiler
   ```

- Create your contract file with name.tact and set your tact.config.json file just like in repository

- import deployment library into your tact contract 

- install deployer via yarn
    ```
    yarn add @tact-lang/deployer
    ```
- Build/Compile your code via 
    ```
    yarn build 
    ```
- Finaly use deployment script to create link and deploy your tact contract via TON-verifier

(location of files in deployment script is according to this repository structure)    

- Currently TON-verifier test-net doesnt support tact.compiler version 1.1.4 so needed to downgrade into 1.1.3 to verify .





  