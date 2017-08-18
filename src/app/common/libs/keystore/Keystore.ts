
import {
  randomBytes,
  createCipheriv,
  pbkdf2Sync,
  createDecipheriv
} from 'crypto-browserify';
import { sha3 } from 'ethereumjs-util';
const scrypt = require('../crypto/scryptsy');
import uuid from 'uuid';
import { KdfParams } from './KdfParams';

declare const Buffer;

export const scryptSettings = {
  n: 1024
};

export function pkeyToKeystore(pkey: Buffer, address: string, password: string) {
  const salt = randomBytes(32);
  const iv = randomBytes(16);
  const kdfparams = new KdfParams(1024, 8, 1, salt.toString('hex'), 32);
  const derivedKey = scrypt(
    new Buffer(password),
    salt,
    kdfparams.n,
    kdfparams.r,
    kdfparams.p,
    kdfparams.dklen
  );
  const cipher = createCipheriv('aes-128-ctr', derivedKey.slice(0, 16), iv);
  if (!cipher) {
    throw new Error('Unsupported cipher');
  }
  const ciphertext = Buffer.concat([cipher.update(pkey), cipher.final()]);
  const mac = sha3(
    Buffer.concat([derivedKey.slice(16, 32), new Buffer(ciphertext, 'hex')])
  );
  return {
    version: 3,
    id: uuid.v4({
      random: randomBytes(16)
    }),
    address,
    Crypto: {
      ciphertext: ciphertext.toString('hex'),
      cipherparams: {
        iv: iv.toString('hex')
      },
      cipher: 'aes-128-ctr',
      kdf: 'scrypt',
      kdfparams,
      mac: mac.toString('hex')
    }
  };
}

export function getV3Filename(address: string) {
  const ts = new Date();
  return ['UTC--', ts.toJSON().replace(/:/g, '-'), '--', address].join('');
}

export function fromV3KeystoreToPkey(input: string, password: string): Buffer {
  let kstore = JSON.parse(input.toLowerCase());
  if (kstore.version !== 3) {
    throw new Error('Not a V3 wallet');
  }
  let derivedKey, kdfparams;

  if (kstore.crypto.kdf === 'scrypt') {
    kdfparams = kstore.crypto.kdfparams;
    derivedKey = scrypt(
      new Buffer(password),
      new Buffer(kdfparams.salt, 'hex'),
      kdfparams.n,
      kdfparams.r,
      kdfparams.p,
      kdfparams.dklen
    );
  } else {
    throw new Error('Unsupported key derivation scheme');
  }
  let ciphertext = new Buffer(kstore.crypto.ciphertext, 'hex');
  let mac = sha3(Buffer.concat([derivedKey.slice(16, 32), ciphertext]));
  if (mac.toString('hex') !== kstore.crypto.mac) {
    throw new Error('Key derivation failed - possibly wrong passphrase');
  }
  let decipher = createDecipheriv(
    kstore.crypto.cipher,
    derivedKey.slice(0, 16),
    new Buffer(kstore.crypto.cipherparams.iv, 'hex')
  );
  let seed = decipherBuffer(decipher, ciphertext);
  while (seed.length < 32) {
    let nullBuff = new Buffer([0x00]);
    seed = Buffer.concat([nullBuff, seed]);
  }
  return seed;
}

function decipherBuffer(decipher, data) {
  return Buffer.concat([decipher.update(data), decipher.final()]);
}
