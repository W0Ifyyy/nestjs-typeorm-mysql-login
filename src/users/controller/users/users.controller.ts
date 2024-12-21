import { Controller, Get, Post, Request } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
