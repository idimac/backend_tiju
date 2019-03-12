import bcrypt from 'bcrypt';
import ORM from '../dbConnection';


class UsersService {
  constructor({ models }) {
    this.UserModel = models.Users;
  }

  async createUser(credentials) {
    const hash = await bcrypt.hash(credentials.password, 10);
    await this.UserModel.create({
      name: credentials.name,
      email: credentials.email,
      password: hash,
    });
    return 'User created';
  }
}

export default new UsersService(ORM);
