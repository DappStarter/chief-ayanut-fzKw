require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush stock royal mad solid injury light army gesture'; 
let testAccounts = [
"0xc12091acd6e7299040927c2943f27a8c3a044595696021dd2f7d4668e57a0c0b",
"0xb3020b43dd7043bbe1e7dbadb4b0407c833c5c0412fe75d86468bdd99b9bb86b",
"0xf04ecafaba645282715e32f7c4ef168c75f63eba2f0c965b475f2959d669a817",
"0x298b65352eb30c1fc1d70a23a5acdac2e7f5e98396c4be09674f2dd294fde604",
"0x332c57ede1cd027ac10b45e46c8f0a629481eb73fe8635024b5632903909b976",
"0x28c9a34154358a3b2017e7c0a95760c8f1fed6b21f5f202e0d1c5bf2edc92320",
"0x33434ff5f4aaacb095ba35eaf5ce89bdbfb733ff7913e121b0cf689389f19fce",
"0x788a14c13d4ac425b4011372f65e18cd9d601cd44c3a8ec1343778cda945df32",
"0x56141f27b5625a161be385bedff29efed77c60428f904b003297aee27fb51c31",
"0x15bc1a1a6d8b4f3aacdf98186cfe773104054cbdc62919b17ff45762a55381ea"
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


