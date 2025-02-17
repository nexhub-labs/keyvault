import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordService } from './password/password.service';
import { EncryptionService } from './encryption/encryption.service';
import { PrismaService } from './services/prisma.service';
import { PasswordController } from './password/password.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [AppController, PasswordController],
  providers: [AppService, PasswordService, EncryptionService, PrismaService, ConfigService],
})
export class AppModule { }
