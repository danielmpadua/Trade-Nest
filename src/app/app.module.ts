import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../modules/user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { 
  constructor(private readonly connection: Connection) {}
 }
