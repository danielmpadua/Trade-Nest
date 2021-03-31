import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationRepository } from './organization.repository';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrganizationRepository])
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule { }
