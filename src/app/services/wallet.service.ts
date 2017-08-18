import { Injectable } from '@angular/core';
import PrivateKeyWallet from '../common/libs/wallet/PrivateKeyWallet';

@Injectable()
export class WalletService {

  constructor() { }

  generateWallet(icapDirect): Promise<PrivateKeyWallet> {
    return PrivateKeyWallet.generate();
  }
}
