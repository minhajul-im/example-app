import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Get all users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // Create new user
  async create(name: string, contact: string): Promise<User> {
    const newUser = this.userRepository.create({ name, contact });
    return await this.userRepository.save(newUser);
  }

  // Delete user by ID
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
