import {
  privateToPublic,
  publicToAddress,
  toChecksumAddress
} from 'ethereumjs-util';

import { randomBytes } from 'crypto-browserify';

export default class PrivateKeyWallet {

  privKey: Buffer;
  pubKey: Buffer;
  address: Buffer;

  static generate(): Promise<PrivateKeyWallet> {
    return Promise.resolve(new PrivateKeyWallet(randomBytes(32)));
  }

  constructor(privkey: Buffer) {
    this.privKey = privkey;
    this.pubKey = privateToPublic(this.privKey);
    this.address = publicToAddress(this.pubKey);
  }

  getAddress(): string {
      return toChecksumAddress(`0x${this.address.toString('hex')}`);
  }

  getPrivateKey() {
    return this.privKey.toString('hex');
  }

  getPrivateKeyBuffer() {
    return this.privKey;
  }
}
