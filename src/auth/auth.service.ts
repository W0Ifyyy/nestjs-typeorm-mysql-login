import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';
import { TCreateUser, TLoginUser } from 'src/utils/types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async logIn(userParams: TLoginUser) {
    try {
      const user = await this.usersService.checkPassword(userParams);
      if (!user) return;
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload, {
          secret: this.configService.get('JWTSECRET'),
          expiresIn: '15m',
        }),
        refresh_token: await this.jwtService.signAsync(payload, {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        }),
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

  async refreshToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      });
      const newAccessToken = await this.jwtService.signAsync(
        {
          sub: payload.sub,
          username: payload.username,
        },
        {
          secret: this.configService.get('JWTSECRET'),
          expiresIn: '15m',
        },
      );
      return { access_token: newAccessToken };
    } catch (error: any) {
      throw new Error('Invalid refresh token');
    }
  }
}
