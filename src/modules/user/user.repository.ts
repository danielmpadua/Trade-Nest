import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async createUser(dto: CreateUserDto): Promise<any> {
        const {name, email, password} = dto;

        let newUser = new UserEntity();
        newUser.name = name;
        newUser.email = email;
        newUser.password = password;
        
        return await this.save(newUser);
    }
}
