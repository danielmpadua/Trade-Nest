import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { OrganizationEntity } from './organization.entity';
import { CreateOrganizationDto, UpdateOrganizationDto, ListOrganizationDTO } from './dto';
import {OrganizationRepository} from './organization.repository';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(OrganizationRepository)
    private readonly organizationRepository: OrganizationRepository
  ) {}

  async findAll(): Promise<any[]> {
    return await this.organizationRepository.getAll();
  }

  async findById(id: string): Promise<ListOrganizationDTO | undefined>{
    return await this.organizationRepository.getById(id);
  }

  async create(organizationDTO: CreateOrganizationDto): Promise<any> {
    return await this.organizationRepository.createOrganization(organizationDTO);
  }

  async update(id: string, organizationDTO: UpdateOrganizationDto): Promise<OrganizationEntity> {
    return await this.organizationRepository.updateOrganization(id, organizationDTO);
  }

  async delete(id: string): Promise<any> {
    return await this.organizationRepository.deleteOrganization(id);
  }
}