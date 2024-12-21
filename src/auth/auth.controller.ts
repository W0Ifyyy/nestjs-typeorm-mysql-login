import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoginUserDto } from 'src/users/dtos/LoginUser.dto';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  logIn(@Body() userParams: LoginUserDto) {
    return this.authService.logIn(userParams);
  }

  @Public()
  @Post('register')
  signUp(@Body() userParams: CreateUserDto) {
    return this.authService.signUp(userParams);
  }
}
