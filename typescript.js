"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
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
function getLastBlockNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = new web3_1.default('https://mainnet.infura.io/v3/6a9b1472d28b4585a844b3ed2d58e9e9');
        const lastBlockNumber = yield web3.eth.getBlockNumber();
        return lastBlockNumber;
    });
}
function getUsdtBalance(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const web3 = new web3_1.default('https://mainnet.infura.io/v3/6a9b1472d28b4585a844b3ed2d58e9e9');
        const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);
        const balance = yield usdtContract.methods.balanceOf(address).call();
        return balance;
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const lastBlockNumber = yield getLastBlockNumber();
            console.log('Last block number:', lastBlockNumber);
            const address = '0xYourAddressHere'; // Replace with the address you want to check the USDT balance for
            const usdtBalance = yield getUsdtBalance(address);
            console.log('USDT balance:', usdtBalance);
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
main();
