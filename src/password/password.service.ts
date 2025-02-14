import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class PasswordService {
  generatePassword(
    includeUppercase: boolean,
    includeLowercase: boolean,
    includeDigits: boolean,
    includeSymbols: boolean,
    length: number,
  ): string {
    let charset = '';
    const charsets = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      digits: '0123456789',
      symbols: '!@#$%^&*()_+[]{}|;:,.<>?',
    };

    if (includeUppercase) charset += charsets.uppercase;
    if (includeLowercase) charset += charsets.lowercase;
    if (includeDigits) charset += charsets.digits;
    if (includeSymbols) charset += charsets.symbols;

    if (!charset) throw new HttpException('At least one character set must be selected.', HttpStatus.EXPECTATION_FAILED);

    const getRandomChar = (characters: string) =>
      characters.charAt(crypto.randomInt(0, characters.length));

    return Array.from({ length })
      .map(() => getRandomChar(charset))
      .join('');
  }
}
