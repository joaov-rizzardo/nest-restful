import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/create-user-dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/list-user-dto';
import { UpdateUserDTO } from './dto/update-user-dto';

@Controller('users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.name = userData.name;
    userEntity.password = userData.password;
    userEntity.id = uuid();
    this.userRepository.save(userEntity);
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'User has been created',
    };
  }

  @Get()
  async findUsers() {
    const users = await this.userRepository.findUsers();
    return users.map((user) => new ListUserDTO(user.id, user.name));
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, data);
    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const removedUser = await this.userRepository.delete(id);
    return {
      user: removedUser,
      message: 'User has been deleted',
    };
  }
}
