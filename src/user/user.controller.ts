import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller('users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    await this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async findUsers() {
    return this.userRepository.findUsers();
  }
}
