import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user) {
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
