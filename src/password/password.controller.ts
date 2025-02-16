import { Controller, Post, Body, UseGuards, Get, HttpException, HttpStatus } from '@nestjs/common';
import { PasswordService } from './password.service';
import { EncryptionService } from '../encryption/encryption.service';
import { GeneratePasswordDto } from '../dto/generate-password';
import { APIGuard } from './../../guards/api.guard';
import { AppService } from './../../src/app.service';

@Controller('keyvault')
@UseGuards(APIGuard)
export class PasswordController {
    constructor(
        private readonly passwordService: PasswordService,
        private readonly encryptionService: EncryptionService,
        private readonly keyVault: AppService
    ) { }

    @Get('')
    @UseGuards()
    async generateAPI() {
        return {
            message: 'Welcome to KeyVault, a subsidiary of Nexhub Labs. This is the password generator API.',
        };
    }

    @Post('generate')
    async generate(@Body() body: GeneratePasswordDto) {
        const { includeUppercase, includeLowercase, includeDigits, includeSymbols, length } = body;

        // Generate the password
        const password = this.passwordService.generatePassword(
            includeUppercase,
            includeLowercase,
            includeDigits,
            includeSymbols,
            length,
        );

        // Return only the plain password to the user
        return { password };
    }

    @Post('store')
    async storeEncryptedPassword(@Body() data: { password: string; keyName: string; }) {
        const { password, keyName } = data;

        if (!password || !keyName) {
            throw new HttpException('Password and key name are required', HttpStatus.BAD_REQUEST);
        }

        // Encrypt the password securely
        const encrypted = await this.encryptPassword(String(password));

        const { encryptedPassword, iv, key } = encrypted;

        // Example database logic (replace with your DB of choice)
        // Ensure your DB connection is secure and encrypted.
        await this.keyVault.createPW({
            keyName: keyName,
            keyValue: encryptedPassword,
            key: key,
            iv: iv,
            createdAt: new Date(),
        });

        return { message: `Password for ${keyName} stored successfully` };
    }

    @Post('retrieve')
    async retrievePassword(@Body() data: { keyName: string; }) {
        const { keyName } = data;

        // Example database logic (replace with your DB of choice)
        // Ensure your DB connection is secure and encrypted.
        const password = await this.keyVault.findPW(keyName);
        // console.log("password", password);

        if (!password) {
            throw new HttpException(`Password for ${keyName} not found`, HttpStatus.NOT_FOUND);
        }

        // Decrypt the password securely
        const decrypted = await this.decryptPassword(password.keyValue, password.iv, password.key, password.algorithm);

        return { password: decrypted };
    }

    @Post('viewDB')
    async viewDB() {
        return this.keyVault.viewDB();
    }

    private async encryptPassword(password: string) {
        return await this.encryptionService.encryptPassword(password);
    }

    private async decryptPassword(
        encryptedPassword: string,
        iv: string,
        key: string,
        algorithm: string = 'aes-256-gcm',
    ) {
        return await this.encryptionService.decryptPassword(
            { encryptedPassword, iv, key, algorithm }
        );
    }
}
