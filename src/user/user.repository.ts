import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async findUsers() {
    return this.users;
  }

  async existsWithEmail(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const possibleUser = this.findById(id);
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      possibleUser[key] = value;
    });
    return possibleUser;
  }

  async delete(id: string) {
    const user = this.findById(id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }

  private findById(id: string) {
    const possibleUser = this.users.find((user) => user.id === id);
    if (!possibleUser) {
      throw new Error('User not found');
    }
    return possibleUser;
  }
}
