import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

declare var window: any;

const contractAbi = require("./contractABI.json")

@Injectable({
  providedIn: 'root'
})

export class Web3Service {

  private web3: Web3;
  private contract: Contract;
  private contractAddress = 'Ox.....'

  constructor() {
    if(window.web3) {
      this.web3 = new Web3(window.etherum)
      this.contract = new this.web3.eth.Contract(contractAbi, this.contractAddress)
    } else {
      console.warn('Metamask not installed.')
    }
  }

  getAccount(): Promise<string> {
    return this.web3.eth.getAccounts().then((accounts) => accounts[0] || '');
  }

  async executeTransaction(fnName: string, ...args: any[]): Promise<void> {
    const acc = await this.getAccount()
    this.contract.methods[fnName](...args).send({from: acc});
  }

}
