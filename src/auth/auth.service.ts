import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';
import { TCreateUser, TLoginUser } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async logIn(userParams: TLoginUser) {
    try {
      const user = await this.usersService.checkPassword(userParams);
      if (!user) return;
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async signUp(userParams: TCreateUser) {
    try {
      return await this.usersService.createUser(userParams);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
