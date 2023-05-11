import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async checkEmail(email: string) {
    const emailAlreadyExists = this.users.find((user) => user.email === email);

    return emailAlreadyExists !== undefined;
  }
}
