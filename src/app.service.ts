import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { KeyVault, Prisma } from 'prisma/client';


@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }

  async viewDB() {
    return this.prisma.keyVault.findMany({
      select: {
        // specify the fields you want to select
        id: true,
        keyName: true,
        createdAt: true,
        // add more fields as needed
      }
    });
  }

  async findPW(keyName: string): Promise<KeyVault> {
    return this.prisma.keyVault.findUnique({ where: { keyName } });
  }

  async createPW(data: Prisma.KeyVaultCreateInput): Promise<KeyVault> {
    try {
      return await this.prisma.keyVault.create({ data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        // Unique constraint failed
        throw new HttpException('Key name already exists', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
