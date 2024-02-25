import Web3 from 'web3';

const infuraProjectId = 'https://mainnet.infura.io/v3/6a9b1472d28b4585a844b3ed2d58e9e9';
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const usdtAbi = [
    {
        constant: true,
        inputs: [{ name: '_owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];

async function getLastBlockNumber() {
    const web3 = new Web3( 'https://mainnet.infura.io/v3/6a9b1472d28b4585a844b3ed2d58e9e9');
    const lastBlockNumber = await web3.eth.getBlockNumber();
    return lastBlockNumber;
}

async function getUsdtBalance(address:string ) {
    const web3 = new Web3('https://mainnet.infura.io/v3/6a9b1472d28b4585a844b3ed2d58e9e9');
    const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
    const balance = await usdtContract.methods.balanceOf(address).call();
    return balance;
}

async function main() {
    try {
        const lastBlockNumber = await getLastBlockNumber();
        console.log('Last block number:', lastBlockNumber);

        const address = '0xYourAddressHere'; // Replace with the address you want to check the USDT balance for
        const usdtBalance = await getUsdtBalance(address);
        console.log('USDT balance:', usdtBalance);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();