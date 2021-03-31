import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class OrganizationEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
