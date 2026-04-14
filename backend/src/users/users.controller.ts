import { Controller, Get, Post, Delete, Body, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET /users - Get all users
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return {
      message: "Users retrieved successfully",
      users: users,
    };
  }

  // POST /users - Create new user
  @Post()
  async create(@Body() body: { name: string; contact: string }) {
    const user = await this.usersService.create(body.name, body.contact);
    return {
      message: "User created successfully",
      user: user,
    };
  }

  // DELETE /users/:id - Delete user
  @Delete(":id")
  async remove(@Param("id") id: number) {
    await this.usersService.remove(id);
    return {
      message: "User deleted successfully",
      id: id,
    };
  }
}
