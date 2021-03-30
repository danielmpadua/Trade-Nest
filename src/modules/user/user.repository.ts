import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto, UpdateUserDto, ListUserDTO } from './dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async getAll(): Promise<ListUserDTO[]> {
        const query = this.createQueryBuilder("user")
            .select(["user.id", "user.name", "user.email"])
            .execute();

        return query;
    }

    async getById(id: string): Promise<ListUserDTO | undefined> {
        const query = this.createQueryBuilder("user")
            .select(["user.id", "user.name", "user.email"])
            .where("user.id = :id", { id })
            .execute();

        return query;
    } 

    async getByEmail(email: string): Promise<ListUserDTO | undefined> {
        const query = this.createQueryBuilder("user")
            .select(["user.id", "user.name", "user.email"])
            .where("user.email = :email", { email })
            .execute();

        return query;
    }

    async createUser(userDTO: CreateUserDto): Promise<any> {
        const {name, email, password} = userDTO;

        let newUser = new UserEntity();
        newUser.name = name;
        newUser.email = email;
        newUser.password = password;
        
        return await this.save(newUser);
    }

    async updateUser(id: string, userDTO: UpdateUserDto): Promise<any> {
        const toUpdate = await this.findOne(id);
        delete toUpdate.password;

        const updated = Object.assign(toUpdate, userDTO);
        return await this.save(updated);
    }

    async deleteUser(id: string): Promise<any> {
        return await this.delete(id);
    }
}
