import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user/user.module'
import { OrganizationModule } from '../modules/organization/organization.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { AuthModule } from '../modules/auth/auth.module';

@Module({
  imports: [
    UserModule,
    OrganizationModule,
    AuthModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { 
  constructor(private readonly connection: Connection) {}
 }
