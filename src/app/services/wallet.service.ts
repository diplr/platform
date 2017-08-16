import { Injectable } from '@angular/core';

import { ethUtil, Wallet } from 'ethereumjs-util';

@Injectable()
export class SettingsService {

    constructor() { }

  generateWallet(icapDirect): string {
    if (icapDirect) {
        while (true) {
            var privKey = ethUtil.crypto.randomBytes(32);
            if (ethUtil.privateToAddress(privKey)[0] === 0) {
                return new Wallet(privKey);
            }
        }
    } else {
        return new Wallet(ethUtil.crypto.randomBytes(32));
    }
  }
}
