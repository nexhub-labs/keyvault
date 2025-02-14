import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class EncryptionService {
  async encryptPassword(password: string): Promise<{
    encryptedPassword: string;
    iv: string;
    key: string;
    algorithm: string;
  }> {
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(12);
    const algorithm = 'aes-256-gcm';

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(password, 'utf8'), cipher.final()]);
    const authTag = cipher.getAuthTag();

    return {
      encryptedPassword: Buffer.concat([encrypted, authTag]).toString('base64'),
      iv: iv.toString('base64'),
      key: key.toString('base64'),
      algorithm: algorithm,
    };
  }

  async decryptPassword(encryptedData: {
    encryptedPassword: string;
    iv: string;
    key: string;
    algorithm: string;
  }): Promise<string> {
    const { encryptedPassword, iv, key, algorithm } = encryptedData;

    const keyBuffer = Buffer.from(key, 'base64');
    const ivBuffer = Buffer.from(iv, 'base64');
    const encryptedBuffer = Buffer.from(encryptedPassword, 'base64');

    // Separate the ciphertext and the authentication tag
    const authTag = encryptedBuffer.subarray(encryptedBuffer.length - 16);
    const encryptedText = encryptedBuffer.subarray(0, encryptedBuffer.length - 16);

    const decipher = crypto.createDecipheriv(algorithm, keyBuffer, ivBuffer) as crypto.DecipherGCM;
    decipher.setAuthTag(authTag);

    const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

    return decrypted.toString('utf8');
  }
}
