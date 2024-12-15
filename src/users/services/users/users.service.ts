import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/entities/Users';
import { comparePassword, hashPassword } from 'src/utils/bcrypt';
import { TCreateUser, TLoginUser } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}
  async createUser(userParams: TCreateUser) {
    return await this.usersRepository.save({
      ...userParams,
      password: hashPassword(userParams.password, 10),
    });
  }
  async loginUser(userParams: TLoginUser) {
    const user = await this.usersRepository.findOne({
      where: { username: userParams.username },
    });
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    if (!comparePassword(userParams.password, user.password))
      throw new HttpException('Wrong Password!', HttpStatus.UNAUTHORIZED);
    return 'Logged in!';
  }
}
