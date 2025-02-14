import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasswordService } from './password/password.service';
import { EncryptionService } from './encryption/encryption.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PasswordService, EncryptionService, PrismaService],
})
export class AppModule {}
