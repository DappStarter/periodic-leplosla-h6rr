require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog olympic tell educate ranch remember million idea gloom system suggest'; 
let testAccounts = [
"0x67578802fc8ace6d6d05498ff21b3ead1c4fac0c27fe815b4a674bd90bb95828",
"0x8954b903a17cc01456d8ceb829fdb4e072e8fafdc6bd725d5901e0fa00dafc54",
"0x8f5ab207d020e6e3e01207e86afb9b5d7b538614d1eaaf1ad774fd1547b29e64",
"0xd56bad95bbf3f02a6b9508e5aeb1c98b177c9abed7c2fb37f84ccb2fcab6bffb",
"0xe8fb364fa195dfd386bff564ff2c3187aed1f38586128be64c554c552b392597",
"0xae4809266adf08585c1cf80d1c3a3035a6fb264ba5eee094a78e39dfa879c4e0",
"0xd9e7a19d57a65ddec6fce0fe1ad4eb8771cc8ac1d20d3f97b6baeee00c7880b5",
"0xe99efadb75883faaba4e198865ec5e7273e95a7a88e53aa98084387ee42ad480",
"0x7e5cff84a0f69889b9004ce3eb0b601d44cbca0d2c9eb09416ff25243a662386",
"0xe630767e4cee7ae8097dba5c7eb99871bd45929017c325e6653d5c4976e59104"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


