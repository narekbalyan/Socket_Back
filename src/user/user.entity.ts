import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from './types';

@Entity('users')
export class User implements UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column('varchar')
  password: string;
}
