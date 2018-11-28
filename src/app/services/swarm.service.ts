import { Injectable } from '@angular/core';

const Web3 = require('web3');

@Injectable({
  providedIn: 'root'
})
export class SwarmService {

  public account: string = null;
  private _web3;

  constructor() {
    // chrome and mist
    if (typeof this._web3 !== undefined ) {
      // this._web3 = new Web3(window.web3.currentProvider);
      this._web3 = new Web3('http://localhost:8545');
      console.log(this._web3);
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }

    // this._web3.eth.getId();
    this._web3.eth.getAccounts((err, accs) => {
      this.account = accs[1];
    });
  }

  async getAccount(order = 0): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      try {
        if (this._web3 !== undefined) {
          this._web3.eth.getAccounts((err, accs) => {
            console.log('err: ', err);
            if (err === null) {
              resolve(accs[order]);
            } else {
              throw err;
            }
          });
        }
      } catch (e) {
        console.error('Web3 Module Not Injected', e);
      }
    });
  }
}
