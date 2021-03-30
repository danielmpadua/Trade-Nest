import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto, UpdateUserDto, ListUserDTO } from './dto';
import {UserRepository} from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  async findAll(): Promise<any[]> {
    return await this.userRepository.getAll();
  }

  async findById(id: string): Promise<ListUserDTO | undefined>{
    return await this.userRepository.getById(id);
  }

  async findByEmail(email: string): Promise<ListUserDTO | undefined>{
    return await this.userRepository.getByEmail(email);
  }

  async create(userDTO: CreateUserDto): Promise<any> {
    return await this.userRepository.createUser(userDTO);
  }

  async update(id: string, userDTO: UpdateUserDto): Promise<UserEntity> {
    return await this.userRepository.updateUser(id, userDTO);
  }

  async delete(id: string): Promise<any> {
    return await this.userRepository.deleteUser(id);
  }
}