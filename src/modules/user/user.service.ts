import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { UserEntity } from './user.entity';
import {CreateUserDto, UpdateUserDto} from './dto';
import {UserRepository} from './user.repository'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  async findAll(): Promise<any[]> {
    return await this.userRepository.findAll()
  }

  // async findById(id: number): Promise<UserRO>{
  //   const user = await this.userRepository.findOne(id);

  //   if (!user) {
  //     const errors = {User: ' not found'};
  //     throw new HttpException({errors}, 401);
  //   }

  //   return this.buildUserRO(user);
  // }

  // async findByEmail(email: string): Promise<UserRO>{
  //   const user = await this.userRepository.findOne({email: email});
  //   return this.buildUserRO(user);
  // }

  // async create(dto: CreateUserDto): Promise<UserRO> {

  // }

  // async update(id: number, dto: UpdateUserDto): Promise<UserEntity> {
  //   let toUpdate = await this.userRepository.findOne(id);
  //   delete toUpdate.password;
  //   delete toUpdate.favorites;

  //   let updated = Object.assign(toUpdate, dto);
  //   return await this.userRepository.save(updated);
  // }

  // async delete(email: string): Promise<DeleteResult> {
  //   return await this.userRepository.delete({ email: email});
  // }
}