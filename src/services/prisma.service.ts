
import { HttpException, HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        try {
            console.log('Connecting to the database...');
            // console.log('KEYVAULT_DATABASE_URL:', process.env.KEYVAULT_DATABASE_URL);
            await this.$connect();
            console.log('Connected successfully.');
        } catch (error) {
            console.error('Database connection error:', error);
            throw new HttpException("Unable to connect to the database", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
        console.log('Disconnected from the database.');
    }
}
