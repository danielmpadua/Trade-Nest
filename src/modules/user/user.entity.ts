import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  username: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column()
  password: string;

}