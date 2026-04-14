import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// User entity mapping to the 'users' table
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 20 })
  contact: string;
}
