import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('organizations')
export class OrganizationEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
