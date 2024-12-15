import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { LoginUserDto } from 'src/users/dtos/LoginUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post('register')
  userCreate(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @Post('login')
  userLogin(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.loginUser(loginUserDto);
  }
}
