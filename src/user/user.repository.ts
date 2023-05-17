import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  private searchById(id: string) {
    const user = this.users.find((savedUser) => savedUser.id === id);

    if (!user) {
      throw new Error('User does not exist');
    }

    return user;
  }

  async checkEmail(email: string) {
    const emailAlreadyExists = this.users.find((user) => user.email === email);

    return emailAlreadyExists !== undefined;
  }

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async update(id: string, newData: Partial<UserEntity>) {
    const user = this.searchById(id);

    Object.entries(newData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async delete(id: string) {
    const user = this.searchById(id);
    this.users = this.users.filter((savedUser) => savedUser.id !== id);
    return user;
  }
}
