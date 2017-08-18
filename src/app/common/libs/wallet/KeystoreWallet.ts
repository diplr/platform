import PrivateKeyWallet from './PrivateKeyWallet';

import { fromV3KeystoreToPkey } from '../keystore/Keystore';

export default class KeystoreWallet extends PrivateKeyWallet {
  constructor(keystore: string, password: string) {
      super(fromV3KeystoreToPkey(keystore, password));
  }
}
