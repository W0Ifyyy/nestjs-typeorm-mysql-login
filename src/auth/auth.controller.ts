import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { LoginUserDto } from 'src/users/dtos/LoginUser.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/decorators/public.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async logIn(@Body() userParams: LoginUserDto, @Res() res: Response) {
    try {
      const tokens = await this.authService.logIn(userParams);
      res.cookie('refresh_token', tokens.refresh_token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      res.json({
        access_token: tokens.access_token,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  @Public()
  @Post('register')
  signUp(@Body() userParams: CreateUserDto) {
    return this.authService.signUp(userParams);
  }

  @Public()
  @Post('refresh')
  async refresh(@Body('refresh_token') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
