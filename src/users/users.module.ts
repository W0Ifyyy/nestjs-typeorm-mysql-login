import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/entities/Users';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
