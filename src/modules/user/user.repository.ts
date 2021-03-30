import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async findAll(){
    return await this.findAll()
  }
}